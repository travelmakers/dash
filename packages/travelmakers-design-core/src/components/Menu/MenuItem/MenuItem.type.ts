import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./MenuItem";
import useStyles from "./MenuItem.style";

type MenuItemStylesNames = ClassNames<typeof useStyles>;

interface SharedMenuItemProps
  extends Props,
    TmComponentProps<MenuItemStylesNames> {}

export type MenuItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedMenuItemProps>;

export type MenuItemComponent = <C extends React.ElementType = "a">(
  props: MenuItemProps<C>
) => React.ReactElement;
