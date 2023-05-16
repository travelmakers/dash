import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./DropdownTrigger";
import useStyles from "./DropdownTrigger.style";

type SelectDropBoxStylesNames = ClassNames<typeof useStyles>;

interface SharedDropdownTriggerProps
  extends Props,
    TmComponentProps<SelectDropBoxStylesNames> {}

export type DropdownTriggerProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDropdownTriggerProps>;

type DropdownTriggerComponent = <C extends React.ElementType = "button">(
  props: DropdownTriggerProps<C>
) => React.ReactElement;

export type ReturnType = DropdownTriggerComponent & {
  displayName?: string;
};
