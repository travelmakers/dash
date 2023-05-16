import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./DropdownItems.style";
import { DropdownItemsProps, ReturnType } from "./DropdownItems.type";

export interface Props {
  items: React.ReactNode[];
}

export const DropdownItems = forwardRef(
  <C extends React.ElementType = "ul">(
    { items, className, ...props }: DropdownItemsProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"ul"}
        className={cx(classes.root, className)}
        role="listbox"
        ref={ref}
        {...props}
      >
        {items}
      </View>
    );
  }
) as unknown as ReturnType;

DropdownItems.displayName = "DropdownItems";
