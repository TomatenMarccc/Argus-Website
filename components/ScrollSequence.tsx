"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { modules } from "@/lib/modules";

const FRAME_COUNT = 88;
/** Height of the scroll track. More = slower, more cinematic disassembly. */
const TRACK_VH = 520;
/** Progress point where the vehicle starts separating into modules. */
const EXPLODE_START = 0.52;

const framePath = (i: number) =>
  `/ugv-scroll/frame-${String(i).padStart(3, "0")}.png`;

function clamp(v: number, lo = 0, hi = 1) {
  return Math.min(hi, Math.max(lo, v));
}

export default function ScrollSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  // Canvas draw (cover fit + devicePixelRatio)
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const imgs = imagesRef.current;
    if (!canvas || imgs.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const idx = clamp(
      Math.round(progressRef.current * (FRAME_COUNT - 1)),
      0,
      FRAME_COUNT - 1
    );
    let img = imgs[idx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // fall back to nearest loaded frame
      for (let d = 1; d < FRAME_COUNT; d++) {
        const a = imgs[idx - d];
        const b = imgs[idx + d];
        if (a && a.complete && a.naturalWidth) {
          img = a;
          break;
        }
        if (b && b.complete && b.naturalWidth) {
          img = b;
          break;
        }
      }
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (cw === 0 || ch === 0) return;

    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cw, ch);

    // cover fit
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    let dw: number, dh: number, dx: number, dy: number;
    if (cr > ir) {
      dw = cw;
      dh = cw / ir;
      dx = 0;
      dy = (ch - dh) / 2;
    } else {
      dh = ch;
      dw = ch * ir;
      dx = (cw - dw) / 2;
      dy = 0;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  const scheduleDraw = useCallback(
    (syncProgress = false) => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        draw();
        if (syncProgress) setProgress(progressRef.current);
      });
    },
    [draw]
  );

  // Preload frames. Register handlers before assigning src so cached frames
  // cannot complete before React knows they loaded.
  useEffect(() => {
    let mounted = true;
    let count = 0;
    const settled = new Array<boolean>(FRAME_COUNT).fill(false);
    const imgs = Array.from({ length: FRAME_COUNT }, () => new Image());
    imagesRef.current = imgs;
    setLoaded(0);
    setReady(false);

    const markSettled = (i: number) => {
      if (!mounted || settled[i]) return;
      settled[i] = true;
      count += 1;
      setLoaded(count);
      if (i === 0 || imgs[i].naturalWidth > 0) setReady(true);
      scheduleDraw();
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = imgs[i];
      img.onload = img.onerror = () => {
        markSettled(i);
      };
      img.src = framePath(i + 1);
      if (img.complete) markSettled(i);
    }

    return () => {
      mounted = false;
    };
  }, [scheduleDraw]);

  // Scroll → progress
  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = clamp(-rect.top / (total || 1));
      progressRef.current = p;
      scheduleDraw(true);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const canvas = canvasRef.current;
    const resizeObserver =
      canvas && "ResizeObserver" in window
        ? new ResizeObserver(updateProgress)
        : null;
    if (canvas) resizeObserver?.observe(canvas);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      resizeObserver?.disconnect();
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [scheduleDraw]);

  // Redraw once the first frame is ready
  useEffect(() => {
    if (ready) scheduleDraw();
  }, [ready, scheduleDraw]);

  const explodeT = clamp((progress - EXPLODE_START) / (1 - EXPLODE_START));
  const introOpacity = clamp(1 - progress / 0.12);
  const pct = Math.round(progress * 100);

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="relative bg-studio text-ink-900"
      style={{ height: `${TRACK_VH}vh` }}
      aria-label="Interaktive Systemübersicht von ARGUS II"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* soft studio vignette to blend the frames into the section */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 30%, rgba(255,255,255,0.35), rgba(182,182,184,0) 60%)",
          }}
        />

        <canvas ref={canvasRef} className="absolute inset-0 z-10 h-full w-full" />

        {/* Loading state */}
        {loaded < FRAME_COUNT && (
          <div className="absolute left-1/2 top-6 z-40 -translate-x-1/2">
            <div className="flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/60 px-3 py-1 font-mono text-[11px] tracking-widest text-ink-700 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-600" />
              LOADING SEQUENCE {Math.round((loaded / FRAME_COUNT) * 100)}%
            </div>
          </div>
        )}

        {/* Section kicker */}
        <div className="pointer-events-none absolute left-6 top-6 z-30 md:left-10 md:top-10">
          <p className="font-mono text-[11px] tracking-widest2 text-ink-700">
            <span className="text-signal-700">◆</span>&nbsp;&nbsp;SYSTEMARCHITEKTUR
          </p>
        </div>

        {/* Progress readout */}
        <div className="pointer-events-none absolute right-6 top-6 z-30 flex items-center gap-3 md:right-10 md:top-10">
          <div className="h-24 w-px overflow-hidden rounded bg-ink-900/15">
            <div
              className="w-full bg-signal-600 transition-none"
              style={{ height: `${pct}%` }}
            />
          </div>
          <span className="font-mono text-[11px] tabular-nums tracking-widest text-ink-700">
            {String(pct).padStart(2, "0")}
          </span>
        </div>

        {/* Intro overlay (fades as you begin scrolling) */}
        <div
          className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-end pb-24 text-center md:pb-28"
          style={{ opacity: introOpacity }}
        >
          <h2 className="max-w-2xl px-6 text-2xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            Eine Plattform.{" "}
            <span className="text-signal-700">Vier Systemelemente.</span>
          </h2>
          <p className="mt-3 max-w-md px-6 text-sm text-ink-500 md:text-base">
            Weiter scrollen, um ARGUS II Ebene für Ebene zu erkunden.
          </p>
          <div className="mt-6 flex h-9 w-6 items-start justify-center rounded-full border border-ink-900/25">
            <span className="mt-1.5 h-1.5 w-1.5 animate-scroll-dot rounded-full bg-ink-700" />
          </div>
        </div>

        {/* Exploded-view label */}
        <div
          className="pointer-events-none absolute left-1/2 top-8 z-30 -translate-x-1/2 text-center transition-opacity duration-500"
          style={{ opacity: explodeT > 0.15 ? 1 : 0 }}
        >
          <p className="font-mono text-[11px] tracking-widest2 text-signal-700">
            SYSTEMANSICHT
          </p>
        </div>

        {/* Module callouts — revealed as the vehicle separates */}
        <div className="absolute inset-0 z-30">
          {modules.map((m, i) => {
            const appear = clamp((explodeT - i * 0.06) / 0.28);
            const isLeft = m.side === "left";
            return (
              <div
                key={m.id}
                className="absolute w-[42%] max-w-[300px] sm:w-[38%] md:w-[300px]"
                style={{
                  top: `${m.yPct * 100}%`,
                  [isLeft ? "right" : "left"]: "52%",
                  transform: `translateY(-50%) translateX(${
                    isLeft ? -1 : 1
                  }px)`,
                  opacity: appear,
                  pointerEvents: appear > 0.9 ? "auto" : "none",
                } as React.CSSProperties}
              >
                <div
                  className={`flex items-center gap-3 ${
                    isLeft ? "flex-row-reverse text-right" : "text-left"
                  }`}
                  style={{
                    transform: `translateX(${(1 - appear) * (isLeft ? 24 : -24)}px)`,
                  }}
                >
                  {/* connector node */}
                  <span className="relative flex h-3 w-3 flex-none items-center justify-center">
                    <span className="absolute h-3 w-3 animate-pulse-ring rounded-full bg-signal-500/60" />
                    <span className="h-2 w-2 rounded-full bg-signal-600 ring-2 ring-white/70" />
                  </span>
                  <div className="rounded-lg border border-ink-900/10 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-sm">
                    <div
                      className={`flex items-center gap-2 ${
                        isLeft ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="font-mono text-[10px] font-semibold text-signal-700">
                        {m.no}
                      </span>
                      <span className="text-sm font-semibold text-ink-900">
                        {m.name}
                      </span>
                    </div>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-400">
                      {m.tagline}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom fade into next (dark) section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-b from-transparent to-ink-900" />
      </div>
    </section>
  );
}
