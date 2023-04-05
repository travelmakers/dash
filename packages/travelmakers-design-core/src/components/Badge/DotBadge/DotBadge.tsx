"use client";

import { ClassNames, PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, useEffect } from "react";
import { View } from "../../View";
import useStyles from "./DotBadge.style";
import {
  DotBadgeComponent,
  DotBadgeProps,
  DotBadgeSize,
  DotBadgeType,
} from "./DotBadge.type";

export type DotBadgeStylesNames = ClassNames<typeof useStyles>;

export interface Props<T extends DotBadgeType> {
  type: T;
  size: DotBadgeSize<T>;
  label?: string | number;
}

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
