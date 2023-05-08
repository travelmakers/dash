import { PolymorphicComponentProps } from "@travelmakers/styles";
import { Dispatch, SetStateAction } from "react";
import { Props } from "./Dropdown";

export type DropdownContextValue = {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
};

interface SharedDropdownProps extends Props {}

export type DropdownProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDropdownProps>;

export type DropdownComponent = <C extends React.ElementType = "div">(
  props: DropdownProps<C>
) => React.ReactElement;
