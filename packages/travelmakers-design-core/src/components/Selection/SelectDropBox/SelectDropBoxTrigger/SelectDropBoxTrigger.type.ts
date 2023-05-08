import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Dropdown } from "../../../Dropdown";
import useStyles from "./SelectDropBoxTrigger.style";

type SelectDropBoxTriggerStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectDropBoxTriggerProps
  extends TmComponentProps<SelectDropBoxTriggerStylesNames> {}

export type SelectDropBoxTriggerProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectDropBoxTriggerProps>;

export type SelectDropBoxTriggerComponent = <
  C extends React.ElementType = typeof Dropdown.Trigger
>(
  props: SelectDropBoxTriggerProps<C>
) => React.ReactElement;
