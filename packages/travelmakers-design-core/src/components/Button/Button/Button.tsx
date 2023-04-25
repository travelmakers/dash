import {
  PolymorphicRef,
  TmPalette,
  TmSize,
} from "@travelmakers-design-v2/styles";
import { PropsWithChildren, forwardRef } from "react";
import { Typography } from "../../Typography/Typography";
import { View } from "../../View";
import useStyles from "./Button.style";
import { ButtonComponent, ButtonProps } from "./Button.type";

export interface Props {
  // 컴포넌트 내에서 사용할 props 타입 정의
  /** Button 컴포넌트의 크기를 정합니다. */
  size?: TmSize;

  /** Button 컴포넌트의 색상을 정합니다. */
  variant?: TmPalette;

  /** true일 경우 radius를 100px로 지정합니다. (default: full) */
  roundness?: boolean;

  /** true일 경우 좌우 공간을 모두 차지합니다. */
  fullWidth?: boolean;

  /** Button 요소의 type을 지정합니다. */
  type?: "submit" | "button" | "reset";

  /** true일 경우 Button이 disabled 됩니다. */
  disabled?: boolean;

  /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
  leftIcon?: React.ReactNode;

  /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
  rightIcon?: React.ReactNode;
}

export const Button: ButtonComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "button">(
    {
      size = "small",
      variant = "primary",
      roundness = false,
      fullWidth = false,
      type = "button",
      disabled = false,
      leftIcon = "",
      rightIcon = "",
      className,
      children,
      ...props
    }: PropsWithChildren<ButtonProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({
      size,
      variant,
      fullWidth,
      roundness,
    });

    return (
      <View<React.ElementType>
        component={"button"}
        ref={ref}
        type={type}
        disabled={disabled}
        className={cx(classes.root, classes.solid, className)}
        {...props}
      >
        <div className={classes.inner}>
          {leftIcon && <span className={cx(classes.icon)}>{leftIcon}</span>}

          <Typography
            level={
              size === "small" ? "body3" : size === "medium" ? "body2" : "body1"
            }
            className={classes.label}
          >
            {children}
          </Typography>

          {rightIcon && <span className={cx(classes.icon)}>{rightIcon}</span>}
        </div>
      </View>
    );
  }
);

Button.displayName = "Button";