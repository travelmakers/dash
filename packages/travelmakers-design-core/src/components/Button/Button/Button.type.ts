import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./Button";
import useStyles from "./Button.style";

type ButtonStylesNames = ClassNames<typeof useStyles>;

interface SharedButtonProps
  extends Props,
    TmComponentProps<ButtonStylesNames> {}

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedButtonProps>;

export type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement;
