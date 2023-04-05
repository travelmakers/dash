import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import useStyles from "./MenuItem.style";
import { MenuItemComponent, MenuItemProps } from "./MenuItem.type";

export interface Props extends LinkProps {
  menu: string;
}

export const MenuItem: MenuItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "a">(
    { className, menu, ...props }: MenuItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <li className={cx(classes.root, className)}>
        <Link ref={ref} className={classes.link} {...props}>
          {menu}
        </Link>
      </li>
    );
  }
);

MenuItem.displayName = "MenuItem";
