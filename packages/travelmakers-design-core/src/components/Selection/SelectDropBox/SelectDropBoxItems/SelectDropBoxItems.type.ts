import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Dropdown } from "../../../Dropdown";
import { Props } from "./SelectDropBoxItems";
import useStyles from "./SelectDropBoxItems.style";

type SelectDropBoxItemsStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectDropBoxItemsProps
  extends Props,
    TmComponentProps<SelectDropBoxItemsStylesNames> {}

export type SelectDropBoxItemsProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectDropBoxItemsProps>;

type SelectDropBoxItemsComponent = <
  C extends React.ElementType = typeof Dropdown.Items
>(
  props: SelectDropBoxItemsProps<C>
) => React.ReactElement;

export type ReturnType = SelectDropBoxItemsComponent & {
  displayName?: string;
};
