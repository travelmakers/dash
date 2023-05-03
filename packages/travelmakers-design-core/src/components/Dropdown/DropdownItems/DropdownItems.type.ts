import { PolymorphicComponentProps } from "@travelmakers-design-v2/styles";
import { Props } from "./DropdownItems";

interface SharedDropdownItemsProps extends Props {}

export type DropdownItemsProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDropdownItemsProps>;

export type DropdownItemsComponent = <C extends React.ElementType = "ul">(
  props: DropdownItemsProps<C>
) => React.ReactElement;
