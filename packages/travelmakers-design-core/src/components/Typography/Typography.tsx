import {
  PolymorphicRef,
  TmColor,
  TmFontFamily,
  TmFontSize,
} from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { View } from "../View";
import useStyles from "./Typography.style";
import {
  ReturnType,
  TypographyProps,
  TypographyTextAlign,
} from "./Typography.type";

export type Props = {
  id?: string;

  /** Typography 컴포넌트의 font-family를 정합니다. */
  family?: TmFontFamily;

  /** Typography 컴포넌트의 크기를 정합니다. */
  level?: TmFontSize;

  /** Typography 컴포넌트의 text-align을 정합니다. */
  textAlign?: TypographyTextAlign;

  /** true일 경우 Text가 disabled 됩니다. */
  disabled?: boolean;

  /** true일 경우 Text가 strong 됩니다. */
  strong?: boolean;

  /** true일 경우 Text가 italic 됩니다. */
  italic?: boolean;

  /** true일 경우 Text가 underline 됩니다. */
  underline?: boolean;

  /** Text가 컴포넌트의 색상을 정합니다. */
  color?: TmColor;

  /** mobile일 경우의 Typography 컴포넌트의 크기를 지정합니다. */
  mobileLevel?: TmFontSize;

  /** tablet일 경우의 Typography 컴포넌트의 크기를 지정합니다. */
  wideLevel?: TmFontSize;
};

export const Typography = forwardRef(
  <C extends React.ElementType = "span">(
    {
      id,
      children,
      component,
      family = "Pretendard",
      level = "body1",
      mobileLevel,
      wideLevel,
      textAlign = "left",
      disabled = false,
      strong = false,
      italic = false,
      underline = false,
      color,
      className,
      co,
      overrideStyles,
      ...props
    }: TypographyProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles(
      {
        family,
        level,
        disabled,
        strong,
        italic,
        underline,
        textAlign,
        color,
        mobile: mobileLevel,
        wide: wideLevel,
      },
      { overrideStyles, name: "typography" }
    );

    return (
      <View<React.ElementType>
        component={component || "span"}
        ref={ref}
        disabled={disabled}
        className={cx(classes.root, classes.solid, className)}
        co={co}
        onTouchStart={() => {}}
        {...props}
      >
        {children}
      </View>
    );
  }
) as unknown as ReturnType;

Typography.displayName = "Typography";
