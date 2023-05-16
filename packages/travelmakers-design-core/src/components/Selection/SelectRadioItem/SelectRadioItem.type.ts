import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./SelectRadioItem";
import useStyles from "./SelectRadioItem.style";

type SelectRadioItemStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectRadioItemProps
  extends Props,
    TmComponentProps<SelectRadioItemStylesNames> {}

export type SelectRadioItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectRadioItemProps>;

type SelectRadioItemComponent = <C extends React.ElementType = "input">(
  props: SelectRadioItemProps<C>
) => React.ReactElement;

export type ReturnType = SelectRadioItemComponent & {
  displayName?: string;
};
