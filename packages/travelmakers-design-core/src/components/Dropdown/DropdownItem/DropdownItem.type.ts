import { PolymorphicComponentProps } from "@travelmakers/styles";
import { Props } from "./DropdownItem";

interface SharedDropdownItemProps extends Props {}

export type DropdownItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDropdownItemProps>;

type DropdownItemComponent = <C extends React.ElementType = "li">(
  props: DropdownItemProps<C>
) => React.ReactElement;

export type ReturnType = DropdownItemComponent & {
  displayName?: string;
};
