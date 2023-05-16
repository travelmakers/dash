import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Dropdown } from "../../../Dropdown";
import { Props } from "./SelectDropBoxItem";
import useStyles from "./SelectDropBoxItem.style";

type SelectDropBoxItemStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectDropBoxItemProps
  extends Props,
    TmComponentProps<SelectDropBoxItemStylesNames> {}

export type SelectDropBoxItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectDropBoxItemProps>;

type SelectDropBoxItemComponent = <
  C extends React.ElementType = typeof Dropdown.Item
>(
  props: SelectDropBoxItemProps<C>
) => React.ReactElement;

export type ReturnType = SelectDropBoxItemComponent & {
  displayName?: string;
};
