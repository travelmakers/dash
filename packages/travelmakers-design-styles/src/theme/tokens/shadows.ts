export type CoShadows =
  | "elevation1"
  | "elevation2"
  | "elevation3"
  | "elevation4"
  | "elevation5"
  | "none";

export type Shadows = {
  /** 0px 4px 8px rgba(0, 0, 0, 0.15) */
  elevation1: string;
  /** 0px 4px 12px rgba(0, 0, 0, 0.15) */
  elevation2: string;
  /** 0px 4px 16px rgba(0, 0, 0, 0.2) */
  elevation3: string;
  /** 0px 4px 20px rgba(0, 0, 0, 0.2) */
  elevation4: string;
  /** 0px 4px 24px rgba(0, 0, 0, 0.2) */
  elevation5: string;
  /** none */
  none: string;
};

export const DEFAULT_SHADOWS: Record<CoShadows, string> = {
  elevation1: "0px 4px 8px rgba(0, 0, 0, 0.15)",
  elevation2: "0px 4px 12px rgba(0, 0, 0, 0.15)",
  elevation3: "0px 4px 16px rgba(0, 0, 0, 0.2)",
  elevation4: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  elevation5: "0px 4px 24px rgba(0, 0, 0, 0.2)",
  none: "none",
};
