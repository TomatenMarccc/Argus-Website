"use client";

import { useEffect, useRef, useState } from "react";

/* Every fifth frame of the 125-frame turntable: a full rotation at roughly a
   quarter of the payload. */
const FRAMES = Array.from(
  { length: 25 },
  (_, i) => `/frames/frame-${String(i * 5 + 1).padStart(4, "0")}.webp`
);

type Props = { label: string; hint: string };

export default function Turntable({ label, hint }: Props) {
  const [index, setIndex] = useState(0);
  const [armed, setArmed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startIndex: number } | null>(null);

  /* Hold off on fetching 25 images until the viewer is actually approached. */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setArmed(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const wrap = (n: number) => ((n % FRAMES.length) + FRAMES.length) % FRAMES.length;

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { startX: e.clientX, startIndex: index };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag) return;
    const width = containerRef.current?.clientWidth ?? 1;
    /* One full drag across the viewer equals one full rotation. */
    const delta = ((e.clientX - drag.startX) / width) * FRAMES.length;
    setIndex(wrap(Math.round(drag.startIndex - delta)));
  };

  const endDrag = (e: React.PointerEvent) => {
    dragRef.current = null;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div ref={containerRef}>
      <div
        className="relative aspect-[4/5] cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-3xl bg-paper-100 sm:aspect-[5/4]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {armed &&
          FRAMES.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={i === index ? label : ""}
              aria-hidden={i !== index}
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-contain mix-blend-multiply transition-opacity ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

        <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-paper/80 px-3 py-1 text-[0.7rem] font-medium text-forest-900/70">
          {hint}
        </p>
      </div>

      {/* Keyboard- and screen-reader-accessible equivalent of dragging. */}
      <label className="mt-4 block">
        <span className="sr-only">{label}</span>
        <input
          type="range"
          min={0}
          max={FRAMES.length - 1}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-forest-200 accent-forest-700"
        />
      </label>
    </div>
  );
}
