import { PolymorphicRef } from "@travelmakers/styles";
import Link, { LinkProps } from "next/link";
import React, { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./MenuItem.style";
import { MenuItemProps, MenuItemType, ReturnType } from "./MenuItem.type";

export interface Props extends Omit<LinkProps, "href"> {
  type?: MenuItemType;
  menu: string;
  href?: LinkProps["href"];
}

export const MenuItem = forwardRef(
  <C extends React.ElementType = typeof Link>(
    { type = "link", className, menu, href, ...props }: MenuItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <li className={cx(classes.root, className)}>
        <View<React.ElementType>
          component={type === "link" ? Link : "button"}
          href={href}
          ref={ref}
          className={cx(classes.link, {
            [classes.button]: type === "button",
          })}
          {...props}
        >
          {menu}
        </View>
      </li>
    );
  }
) as unknown as ReturnType;

MenuItem.displayName = "MenuItem";
