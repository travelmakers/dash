import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef } from "react";
import { Icon } from "../../Icon";
import { Typography } from "../../Typography";
import { View } from "../../View";
import { NavButton } from "../NavButton";
import { NavLink } from "../NavLink/NavLink";
import useStyles from "./NavBar.style";
import { NavBarComponent, NavBarProps } from "./NavBar.type";

export interface Props {
  title: string;
  hasBack?: boolean;
  backBtnProps?: React.HTMLAttributes<HTMLButtonElement>;
  actionEl?: React.ReactNode;
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
      backBtnProps = {},
      actionEl,
      className,
      ...props
    }: NavBarProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();
    const { className: backBtnClassName, ...backBtnRest } = backBtnProps;

    return (
      <View<React.ElementType>
        component={"header"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        {hasBack && (
          <button
            type={"button"}
            className={cx(classes.button, backBtnClassName)}
            aria-label={"뒤로가기"}
            {...backBtnRest}
          >
            <Icon src={"IcArrowLeft"} width={24} height={24} />
          </button>
        )}
        <Typography
          level={"subhead2"}
          color={"primary"}
          className={classes.title}
          strong
        >
          {title}
        </Typography>
        {actionEl}
      </View>
    );
  }
);

NavBar.displayName = "NavBar";
NavBar.NavLink = NavLink;
NavBar.NavButton = NavButton;
