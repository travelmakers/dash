import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./Toggle";
import useStyles from "./Toggle.style";

type ToggleStylesNames = ClassNames<typeof useStyles>;

interface SharedToggleProps
  extends Props,
    TmComponentProps<ToggleStylesNames> {}

export type ToggleProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedToggleProps>;

type ToggleComponent = <C extends React.ElementType = "input">(
  props: ToggleProps<C>
) => React.ReactElement;

export type ReturnType = ToggleComponent & {
  displayName?: string;
};
