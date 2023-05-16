import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./Input";
import useStyles from "./Input.style";

type InputStylesNames = ClassNames<typeof useStyles>;

interface SharedInputProps extends Props, TmComponentProps<InputStylesNames> {}

export type InputProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedInputProps
>;

type InputComponent = <C extends React.ElementType = "input">(
  props: InputProps<C>
) => React.ReactElement;

export type ReturnType = InputComponent & {
  displayName?: string;
};
