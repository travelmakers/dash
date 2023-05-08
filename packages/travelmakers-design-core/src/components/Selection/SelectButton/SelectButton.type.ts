import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./SelectButton";
import useStyles from "./SelectButton.style";

type SelectButtonStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectButtonProps
  extends Props,
    TmComponentProps<SelectButtonStylesNames> {}

export type SelectButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectButtonProps>;

export type SelectButtonComponent = <C extends React.ElementType = "fieldset">(
  props: SelectButtonProps<C>
) => React.ReactElement;
