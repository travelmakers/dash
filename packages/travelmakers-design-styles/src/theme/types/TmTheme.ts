import {
  CoBreakpoints,
  CoRadius,
  CoShadows,
  CoSpacing,
  TmColor,
  TmFontSizes,
  TmMedia,
} from "../tokens";
import { TmSize } from "./TmSize";

import type { CSSProperties } from "react";
import type { DeepPartial } from "./DeepPartial";

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
  fontSizes: Record<TmFontSizes, number>;
  lineHeights: Record<TmFontSizes, number>;
  radius: Record<CoRadius, number | string>;
  spacing: Record<CoSpacing, number>;
  breakpoints: Record<CoBreakpoints, number>;
  shadows: Record<CoShadows, string>;
  media: TmMedia;

  headings: {
    display1: HeadingStyle;
    display2: HeadingStyle;
    display3: HeadingStyle;
    display4: HeadingStyle;
    display5: HeadingStyle;
    display6: HeadingStyle;
    subhead1: HeadingStyle;
    subhead2: HeadingStyle;
  };

  fn: TmThemeFunctions;
}

export type TmThemeBase = Omit<TmTheme, "fn">;

export type TmThemeOverride = DeepPartial<Omit<TmTheme, "extra">> & {
  extra?: Record<string, any>;
};
