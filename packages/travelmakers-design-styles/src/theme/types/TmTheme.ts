import {
  CoRadius,
  CoShadows,
  CoSpacing,
  TmColor,
  TmFontSizes,
  TmMedia,
} from "../tokens";
import { TmSize } from "./TmSize";

import type { CSSProperties } from "react";
import { TmPalette } from "../tokens/palettes";
import { CoTypography } from "../tokens/typography";
import type { DeepPartial } from "./DeepPartial";
import { Tuple } from "./Tuple";
import { TmDeviceSizes } from "../tokens/deviceSizes";
import { CoBreakpoints } from "../tokens/breakpoints";
import { CoTransitionTiming } from "../tokens/transtionTiming";

export interface HeadingStyle {
  fontSize: CSSProperties["fontSize"];
  lineHeight: CSSProperties["lineHeight"];
}

interface TmThemeFunctions {
  rgba(color: string, alpha: number): string;
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  linearGradient(deg: number, ...colors: string[]): string;
  radialGradient(...colors: string[]): string;
  smallerThan(breakpoint: TmSize | number): string;
  largerThan(breakpoint: TmSize | number): string;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
  spacing(size: number): number;
}

export interface TmTheme {
  locale: string;
  colorScheme: "light" | "dark";
  fontFamily: CSSProperties["fontFamily"];
  lineHeight: CSSProperties["lineHeight"];
  fontFamilyMonospace: CSSProperties["fontFamily"];

  colors: Record<TmColor, string>;
  palettes: Record<TmPalette, Tuple<string, 6>>;
  fontSizes: Record<TmFontSizes, string>;
  lineHeights: Record<TmFontSizes, string>;
  radius: Record<CoRadius, number | string>;
  spacing: Record<CoSpacing, string>;
  shadows: Record<CoShadows, string>;
  media: TmMedia;
  breakpoints: Record<CoBreakpoints, number>;
  typography: CoTypography;
  deviceSizes: TmDeviceSizes;
  transitionTiming: CoTransitionTiming;

  fn: TmThemeFunctions;
}

export type TmThemeBase = Omit<TmTheme, "fn">;

export type TmThemeOverride = DeepPartial<Omit<TmTheme, "extra">> & {
  extra?: Record<string, any>;
};
