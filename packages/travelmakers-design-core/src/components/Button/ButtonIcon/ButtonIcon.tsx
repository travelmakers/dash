import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
  TmSize,
} from "@travelmakers-design-v2/styles";
import { forwardRef, PropsWithChildren } from "react";
import { View } from "../../View";
import useStyles from "./ButtonIcon.style";

export type ButtonIconStylesNames = ClassNames<typeof useStyles>;

export interface Props {
  /** Button 컴포넌트의 크기를 정합니다. */
  size?: TmSize;

  /** true일 경우 Button이 disabled 됩니다. */
  disabled?: boolean;

  type: "prev" | "next";
}
export interface SharedButtonIconProps
  extends Props,
    TmComponentProps<ButtonIconStylesNames> {}

export type ButtonIconProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedButtonIconProps>;

type ButtonIconComponent = <C extends React.ElementType = "button">(
  props: ButtonIconProps<C>
) => React.ReactElement;

export const ButtonIcon: ButtonIconComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "button">(
    {
      size,
      disabled,
      type,
      className,
      children,
      ...props
    }: PropsWithChildren<ButtonIconProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ size, disabled, type });

    return (
      <View<React.ElementType>
        component={"button"}
        ref={ref}
        type="button"
        className={cx(className, classes.button)}
        {...props}
      >
        {children}
      </View>
    );
  }
);

ButtonIcon.displayName = "ButtonIcon";
