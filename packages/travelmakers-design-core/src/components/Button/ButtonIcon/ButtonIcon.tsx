import { PolymorphicRef, useTmTheme } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Icon } from "../../Icon";
import { View } from "../../View";
import useStyles from "./ButtonIcon.style";
import { ButtonIconComponent, ButtonIconProps } from "./ButtonIcon.type";

export interface Props {
  /** ButtonIcon 컴포넌트의 크기를 정합니다. */
  size?: "small" | "medium";

  /** true일 경우 ButtonIcon이 disabled 됩니다. */
  disabled?: boolean;

  /** ButtonIcon 컴포넌트의 색상을 정합니다. */
  variant?: "primary" | "secondary";

  type: "prev" | "next";

  buttonTheme?: "light" | "dark";
}

const ARIA_LABLE = {
  prev: "이전",
  next: "다음",
};

export const ButtonIcon: ButtonIconComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "button">(
    {
      size,
      variant = "primary",
      disabled,
      type,
      buttonTheme = "dark",
      className,
      ...props
    }: ButtonIconProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({
      size,
      variant,
      buttonTheme,
    });
    const theme = useTmTheme();

    const getIconColor = (
      buttonTheme: Props["buttonTheme"],
      variant: Props["variant"],
      disabled: Props["disabled"]
    ) => {
      if (variant === "secondary") {
        if (disabled) {
          if (buttonTheme === "dark") return theme.colors.primaryContainer;
          if (buttonTheme === "light") return theme.colors.primaryContainer;
        } else {
          if (buttonTheme === "dark") return theme.colors.primary;
          if (buttonTheme === "light") return theme.colors.white;
        }
      } else {
        if (disabled) {
          return theme.colors.white;
        } else if (buttonTheme === "dark") {
          return theme.colors.white;
        } else if (buttonTheme === "light") {
          return theme.colors.primary;
        }
      }
    };

    return (
      <View<React.ElementType>
        component={"button"}
        ref={ref}
        type="button"
        disabled={disabled}
        className={cx(className, classes.button)}
        aria-label={ARIA_LABLE[type]}
        {...props}
      >
        {type === "prev" ? (
          <Icon
            src="IcAngleLeft"
            color={getIconColor(buttonTheme, variant, disabled)}
          />
        ) : (
          <Icon
            src="IcAngleRight"
            color={getIconColor(buttonTheme, variant, disabled)}
          />
        )}
      </View>
    );
  }
);

ButtonIcon.displayName = "ButtonIcon";
