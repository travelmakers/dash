import { PolymorphicRef } from "@travelmakers/styles";
import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./MenuItem.style";
import { MenuItemComponent, MenuItemProps } from "./MenuItem.type";

export interface Props extends LinkProps {
  menu: string;
}

export const MenuItem: MenuItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = typeof Link>(
    { className, menu, ...props }: MenuItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <li className={cx(classes.root, className)}>
        <View<React.ElementType>
          component={Link}
          ref={ref}
          className={classes.link}
          {...props}
        >
          {menu}
        </View>
      </li>
    );
  }
);

MenuItem.displayName = "MenuItem";
