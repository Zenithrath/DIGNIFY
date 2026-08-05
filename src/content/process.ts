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
      "We turn the discovery into a clear scope with priorities, deliverables, and an agreed definition of done.",
  },
  {
    index: "03",
    name: "Design",
    detail:
      "We design the page structure, interface, and reusable pieces that the build will need.",
  },
  {
    index: "04",
    name: "Develop",
    detail:
      "We build in clean typed code with responsive layouts, accessible interactions, and performance checks from the first commit.",
  },
  {
    index: "05",
    name: "Deliver",
    detail:
      "We launch with documentation and a clear next step. We remain available after release when the system needs an update.",
  },
];
