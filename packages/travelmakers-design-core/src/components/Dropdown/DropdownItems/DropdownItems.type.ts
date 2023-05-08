import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./DropdownItems";
import useStyles from "./DropdownItems.style";

type SelectDropBoxStylesNames = ClassNames<typeof useStyles>;

interface SharedDropdownItemsProps
  extends Props,
    TmComponentProps<SelectDropBoxStylesNames> {}

export type DropdownItemsProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDropdownItemsProps>;

export type DropdownItemsComponent = <C extends React.ElementType = "ul">(
  props: DropdownItemsProps<C>
) => React.ReactElement;
