import { PolymorphicRef, useCss, useTmTheme } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { ReturnType, ViewTm, extractTm } from "./View.type";

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

export const View = forwardRef(
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
) as unknown as ReturnType;

View.displayName = "View";
