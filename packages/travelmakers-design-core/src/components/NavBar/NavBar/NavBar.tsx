import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { PropsWithChildren, forwardRef } from "react";
import { Icon } from "../../Icon";
import { Typography } from "../../Typography";
import { View } from "../../View";
import { NavButton } from "../NavButton";
import { NavLink } from "../NavLink/NavLink";
import useStyles from "./NavBar.style";
import { NavBarComponent, NavBarProps } from "./NavBar.type";

export interface Props {
  hasBack?: boolean;
  title: string;
}

export const NavBar: NavBarComponent & {
  displayName?: string;
  NavLink?: typeof NavLink;
  NavButton?: typeof NavButton;
} = forwardRef(
  <C extends React.ElementType = "header">(
    {
      hasBack = false,
      title,
      className,
      children,
      ...props
    }: PropsWithChildren<NavBarProps<C>>,
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
        {hasBack && <Icon src={"IcArrowLeft"} width={24} height={24} />}
        <Typography
          level={"subhead2"}
          color={"primary"}
          className={classes.title}
          strong
        >
          {title}
        </Typography>
        {children}
      </View>
    );
  }
);

NavBar.displayName = "NavBar";
NavBar.NavLink = NavLink;
NavBar.NavButton = NavButton;
