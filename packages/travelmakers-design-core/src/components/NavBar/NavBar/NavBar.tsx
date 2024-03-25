import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Typography } from "../../Typography";
import { View } from "../../View";
import { NavButton } from "../NavButton";
import { NavLink } from "../NavLink/NavLink";
import useStyles from "./NavBar.style";
import { NavBarProps, ReturnType } from "./NavBar.type";

export interface Props {
  title: string;
  actionEl?: React.ReactNode;
}

export const NavBar = forwardRef(
  <C extends React.ElementType = "header">(
    { title, actionEl, className, ...props }: NavBarProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"header"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <Typography level={"body3"} color={"primary"} className={classes.title}>
          {title}
        </Typography>
        {actionEl}
      </View>
    );
  }
) as unknown as ReturnType;

NavBar.displayName = "NavBar";
NavBar.NavLink = NavLink;
NavBar.NavButton = NavButton;
