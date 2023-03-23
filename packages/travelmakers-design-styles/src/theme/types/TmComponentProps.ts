import type { CSSObject } from "../../tss";
import type { CSSProperties } from "react";
import type { TmTheme } from "./TmTheme";

export type Tm = CSSObject | ((theme: TmTheme) => CSSObject);

export type OverrideStyles<T extends string = never> =
  | Partial<Record<T, CSSObject>>
  | ((theme: TmTheme) => Partial<Record<T, CSSObject>>);

export interface TmComponentProps<T extends string = never> {
  className?: string;
  style?: CSSProperties;
  tm?: Tm;
  overrideStyles?: OverrideStyles<T>;
}
