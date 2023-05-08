import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./DropdownTrigger";
import useStyles from "./DropdownTrigger.style";

type SelectDropBoxStylesNames = ClassNames<typeof useStyles>;

interface SharedDropdownTriggerProps
  extends Props,
    TmComponentProps<SelectDropBoxStylesNames> {}

export type DropdownTriggerProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDropdownTriggerProps>;

export type DropdownTriggerComponent = <C extends React.ElementType = "button">(
  props: DropdownTriggerProps<C>
) => React.ReactElement;
