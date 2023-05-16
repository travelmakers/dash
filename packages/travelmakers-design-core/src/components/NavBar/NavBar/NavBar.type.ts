import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { NavButton } from "../NavButton";
import { NavLink } from "../NavLink";
import { Props } from "./NavBar";
import useStyles from "./NavBar.style";

type NavBarStylesNames = ClassNames<typeof useStyles>;

interface SharedNavBarProps
  extends Props,
    TmComponentProps<NavBarStylesNames> {}

export type NavBarProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedNavBarProps>;

export type NavBarComponent = <C extends React.ElementType = "header">(
  props: NavBarProps<C>
) => React.ReactElement;

export type ReturnType = NavBarComponent & {
  displayName?: string;
  NavLink: typeof NavLink;
  NavButton: typeof NavButton;
};
