import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./Button";
import useStyles from "./Button.style";

type ButtonStylesNames = ClassNames<typeof useStyles>;

export type ButtonType = "leftIcon" | "rightIcon" | "default";

interface SharedButtonProps
  extends Props,
    TmComponentProps<ButtonStylesNames> {}

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedButtonProps>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement;

export type ReturnType = ButtonComponent & {
  displayName?: string;
};
