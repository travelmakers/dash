import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./SelectRadioItem";
import useStyles from "./SelectRadioItem.style";

type SelectRadioItemStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectRadioItemProps
  extends Props,
    TmComponentProps<SelectRadioItemStylesNames> {}

export type SelectRadioItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectRadioItemProps>;

export type SelectRadioItemComponent = <C extends React.ElementType = "input">(
  props: SelectRadioItemProps<C>
) => React.ReactElement;
