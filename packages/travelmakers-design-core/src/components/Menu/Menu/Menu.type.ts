import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import useStyles from "./Menu.style";

type MenuStylesNames = ClassNames<typeof useStyles>;

interface SharedMenuProps extends TmComponentProps<MenuStylesNames> {}

export type MenuProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedMenuProps
>;

export type MenuComponent = <C extends React.ElementType = "ul">(
  props: MenuProps<C>
) => React.ReactElement;
