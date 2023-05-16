import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { View } from "../../View";
import { PrimaryTabItem } from "../PrimaryTabItem";
import useStyles from "./PrimaryTab.style";
import { PrimaryTabProps, ReturnType } from "./PrimaryTab.type";

export interface Props extends React.HTMLAttributes<HTMLUListElement> {
  items: React.ReactNode[];
}

export const PrimaryTab = forwardRef(
  <C extends React.ElementType = "ul">(
    { items, className, ...props }: PrimaryTabProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"ul"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        {items}
      </View>
    );
  }
) as unknown as ReturnType;

PrimaryTab.displayName = "PrimaryTab";
PrimaryTab.Item = PrimaryTabItem;
