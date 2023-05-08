import { PolymorphicComponentProps } from "@travelmakers-design-v2/styles";
import { Props } from "./DropdownItem";

interface SharedDropdownItemProps extends Props {}

export type DropdownItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDropdownItemProps>;

export type DropdownItemComponent = <C extends React.ElementType = "li">(
  props: DropdownItemProps<C>
) => React.ReactElement;
