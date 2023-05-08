import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import Link from "next/link";
import { Props } from "./NavLink";
import useStyles from "./NavLink.style";

type NavLinkStylesNames = ClassNames<typeof useStyles>;

interface SharedNavLinkProps
  extends Props,
    TmComponentProps<NavLinkStylesNames> {}

export type NavLinkProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedNavLinkProps>;

export type NavLinkComponent = <C extends React.ElementType = typeof Link>(
  props: NavLinkProps<C>
) => React.ReactElement;
