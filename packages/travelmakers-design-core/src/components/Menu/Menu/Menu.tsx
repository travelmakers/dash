import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { View } from "../../View";
import { MenuItem } from "../MenuItem";
import useStyles from "./Menu.style";
import { MenuComponent, MenuProps } from "./Menu.type";

export interface Props {
  items: React.ReactNode[];
}

export const Menu: MenuComponent & {
  displayName?: string;
  Item?: typeof MenuItem;
} = forwardRef(
  <C extends React.ElementType = "ul">(
    { className, items, ...props }: MenuProps<C>,
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
);

Menu.displayName = "Menu";
Menu.Item = MenuItem;
