import {
  PolymorphicComponentProps,
  PolymorphicRef,
  Tm,
  TmComponentProps,
  TmTheme,
  useCss,
  useTmTheme,
} from "@travelmakers-design-v2/styles";
import React, { forwardRef } from "react";

type ViewTm = Tm | Tm[];

interface _ViewProps extends Omit<TmComponentProps, "tm" | "overrideStyles"> {
  tm?: ViewTm;
}

export type ViewProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _ViewProps
>;

type ViewComponent = <C extends React.ElementType = "div">(
  props: ViewProps<C>
) => React.ReactElement;

function extractTm(tm: Tm, theme: TmTheme) {
  return typeof tm === "function" ? tm(theme) : tm;
}

function useBoxTm(tm: ViewTm, className: string) {
  const { css, cx } = useCss();
  const theme = useTmTheme();
  if (Array.isArray(tm)) {
    return cx(
      className,
      tm.map((partial) => css(extractTm(partial, theme)))
    );
  }
  return cx(className, css(extractTm(tm, theme)));
}

export const View: ViewComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = "div">(
    { component, className, style, co, ...props }: any,
    ref: PolymorphicRef<C>
  ) => {
    const Element = component || "div";
    return (
      <Element
        ref={ref}
        className={useBoxTm(co, className)}
        style={style}
        {...props}
      />
    );
  }
);

View.displayName = "@travelmakers-design-v2/core/View";
