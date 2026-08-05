import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    name: "Discover",
    detail:
      "We map the problem: goals, users, constraints, and what success actually looks like. Questions before answers.",
  },
  {
    index: "02",
    name: "Define",
    detail:
      "We turn the discovery into a sharp scope — structure, priorities, and a definition of done both sides agree on.",
  },
  {
    index: "03",
    name: "Design",
    detail:
      "We design the system: information architecture, interface, and the modular pieces that will become code.",
  },
  {
    index: "04",
    name: "Develop",
    detail:
      "We build in clean, typed, maintainable code — responsive, accessible, and performance-conscious from the first commit.",
  },
  {
    index: "05",
    name: "Deliver",
    detail:
      "We launch with documentation and a clear picture of what happens next — and we stay available after the release.",
  },
];
