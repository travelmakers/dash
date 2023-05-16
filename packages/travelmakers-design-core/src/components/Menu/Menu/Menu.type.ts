import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";

import { MenuItem } from "../MenuItem";
import { Props } from "./Menu";
import useStyles from "./Menu.style";

type MenuStylesNames = ClassNames<typeof useStyles>;

interface SharedMenuProps extends Props, TmComponentProps<MenuStylesNames> {}

export type MenuProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedMenuProps
>;

type MenuComponent = <C extends React.ElementType = "ul">(
  props: MenuProps<C>
) => React.ReactElement;

export type ReturnType = MenuComponent & {
  displayName?: string;
  Item: typeof MenuItem;
};
