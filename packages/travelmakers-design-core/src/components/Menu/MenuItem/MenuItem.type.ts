import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import Link from "next/link";
import { Props } from "./MenuItem";
import useStyles from "./MenuItem.style";

type MenuItemStylesNames = ClassNames<typeof useStyles>;

export type MenuItemType = "button" | "link";

interface SharedMenuItemProps
  extends Props,
    TmComponentProps<MenuItemStylesNames> {}

export type MenuItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedMenuItemProps>;

type MenuItemComponent = <C extends React.ElementType = typeof Link>(
  props: MenuItemProps<C>
) => React.ReactElement;

export type ReturnType = MenuItemComponent & {
  displayName?: string;
};
