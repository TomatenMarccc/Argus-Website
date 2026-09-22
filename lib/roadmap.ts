/**
 * Roadmap milestones.
 *
 * Sourced strictly from the Artemis Civil Systems executive summary (July 2026)
 * — the milestone table in section 3 and the ARGUS development stages. Nothing
 * here is invented: where the source gives a vague period ("ab 2027/2028"), that
 * vagueness is preserved rather than sharpened into a fake date.
 */
export type MilestoneStatus = "done" | "current" | "planned";

export type Milestone = {
  id: string;
  /** Period exactly as the source states it; bilingual label in lib/i18n.ts. */
  status: MilestoneStatus;
};

export const roadmap: Milestone[] = [
  { id: "argus-i", status: "done" },
  { id: "argus-ii", status: "current" },
  { id: "feldtests", status: "current" },
  { id: "pilot", status: "planned" },
  { id: "angebot", status: "planned" },
];
