import { PolymorphicRef, TmFontSize } from "@travelmakers/styles";
import React, { PropsWithChildren, forwardRef } from "react";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./NewBadge.style";
import {
  NewBadgeComponent,
  NewBadgeProps,
  NewBadgeType,
} from "./NewBadge.type";

export interface Props {
  type: NewBadgeType;
}

const fontMap: Record<NewBadgeType, TmFontSize> = {
  small: "display6",
  medium: "display4",
};

export const NewBadge: NewBadgeComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type,
      className,
      component,
      children,
      ...props
    }: PropsWithChildren<NewBadgeProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type });

    return (
      <View<React.ElementType>
        component={component || "div"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <Typography
          family={"Noto Serif KR"}
          level={fontMap[type]}
          color="white"
        >
          {children || "New"}
        </Typography>
      </View>
    );
  }
);

NewBadge.displayName = "NewBadge";
