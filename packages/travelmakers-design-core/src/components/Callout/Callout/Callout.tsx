import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { View } from "../../View";
import { CalloutHeader } from "../CalloutHader";
import { CalloutItem } from "../CalloutItem";
import useStyles from "./Callout.style";
import { CalloutProps, CalloutType, ReturnType } from "./Callout.type";

export interface Props {
  type?: CalloutType;
  title: string;
  items?: string[];
  emptyText?: string;
}

export const Callout = forwardRef(
  <C extends React.ElementType = "dl">(
    {
      type = "default",
      title,
      items = [],
      emptyText = "",
      className,
      ...props
    }: CalloutProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const isEmptyItems = items.length === 0;
    const { classes, cx } = useStyles();

    const _items = !isEmptyItems ? (
      items.map((item, idx) => <CalloutItem key={idx} content={item} />)
    ) : (
      <CalloutItem content={emptyText} isEmpty />
    );

    return (
      <View<React.ElementType>
        component={"dl"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <CalloutHeader type={type} title={title} />
        {_items}
      </View>
    );
  }
) as unknown as ReturnType;

Callout.displayName = "Callout";
