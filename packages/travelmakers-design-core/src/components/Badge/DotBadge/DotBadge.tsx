import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { forwardRef, useEffect } from "react";
import { View } from "../../View";
import useStyles from "./DotBadge.style";

export type DotBadgeStylesNames = ClassNames<typeof useStyles>;

export type DotBadgeType = "text" | "number" | "bullet";
export type DotBadgeNormalSize = "small" | "medium" | "large";
export type DotBadgeBulletSize = DotBadgeNormalSize | "xLarge";
export type DotBadgeSize<T> = T extends "bullet"
  ? DotBadgeBulletSize
  : DotBadgeNormalSize;

export interface Props<T extends DotBadgeType> {
  type: T;
  size: DotBadgeSize<T>;
  label?: string | number;
}

export interface SharedDotBadgeProps
  extends Props<DotBadgeType>,
    TmComponentProps<DotBadgeStylesNames> {}

export type DotBadgeProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDotBadgeProps>;

type DotBadgeComponent = <C extends React.ElementType = "div">(
  props: DotBadgeProps<C>
) => React.ReactElement;

export const DotBadge: DotBadgeComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    { type, size, className, component, label, ...props }: DotBadgeProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    useEffect(() => {
      if (type !== "bullet" && size === "xLarge")
        console.error(
          '"xLarge" size는 type이 "bullet"의 경우에만 사용이 가능합니다.'
        );
    }, [type, size]);

    const { classes, cx } = useStyles({ type, size });
    const content = () => {
      if (!label && type === "text") return "N";
      if (!label && type === "number") return 0;

      return label;
    };

    return (
      <View<React.ElementType>
        component={component || "div"}
        ref={ref}
        className={cx(classes.badge, className)}
        {...props}
      >
        {content()}
      </View>
    );
  }
);

DotBadge.displayName = "DotBadge";
