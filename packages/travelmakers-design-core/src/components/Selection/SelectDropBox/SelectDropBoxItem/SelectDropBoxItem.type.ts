import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Dropdown } from "../../../Dropdown";
import { Props } from "./SelectDropBoxItem";
import useStyles from "./SelectDropBoxItem.style";

type SelectDropBoxItemStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectDropBoxItemProps
  extends Props,
    TmComponentProps<SelectDropBoxItemStylesNames> {}

export type SelectDropBoxItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectDropBoxItemProps>;

export type SelectDropBoxItemComponent = <
  C extends React.ElementType = typeof Dropdown.Item
>(
  props: SelectDropBoxItemProps<C>
) => React.ReactElement;
