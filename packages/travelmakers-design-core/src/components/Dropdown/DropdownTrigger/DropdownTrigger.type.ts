import { PolymorphicComponentProps } from "@travelmakers-design-v2/styles";
import { Props } from "./DropdownTrigger";

interface SharedDropdownTriggerProps extends Props {}

export type DropdownTriggerProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDropdownTriggerProps>;

export type DropdownTriggerComponent = <C extends React.ElementType = "button">(
  props: DropdownTriggerProps<C>
) => React.ReactElement;
