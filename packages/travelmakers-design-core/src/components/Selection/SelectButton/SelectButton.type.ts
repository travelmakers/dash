import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Callout } from "src/components/Callout";
import { SelectButtonItem } from "../SelectButtonItem";
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

export type ReturnType = SelectButtonComponent & {
  displayName?: string;
  Item: typeof SelectButtonItem;
  Callout: typeof Callout;
};
