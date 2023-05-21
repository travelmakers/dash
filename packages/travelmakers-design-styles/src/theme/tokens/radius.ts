export type CoRadius = "radius10" | "radius20" | "radius100";
export type Radius = {
  /** 4px */
  radius10: string;
  /** 8px */
  radius20: string;
  /** 100px */
  radius100: string;
};

export const DEFAULT_RADIUS: Record<CoRadius, string> = {
  radius10: "4px",
  radius20: "8px",
  radius100: "100px",
};
