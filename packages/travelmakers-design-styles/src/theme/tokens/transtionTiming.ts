export type CoTransitionTiming = {
  /** cubic-bezier(0, 0, 0.5, 1) */
  easeInOut: string;
};

export const DEFAULT_TRANSITION_TIMING: CoTransitionTiming = {
  easeInOut: "cubic-bezier(0, 0, 0.5, 1)",
};
