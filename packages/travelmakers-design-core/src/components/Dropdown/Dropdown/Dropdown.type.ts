import { PolymorphicComponentProps } from "@travelmakers/styles";
import { Dispatch, SetStateAction } from "react";
import { DropdownItem } from "../DropdownItem";
import { DropdownItems } from "../DropdownItems";
import { DropdownTrigger } from "../DropdownTrigger";
import { Props } from "./Dropdown";

export type DropdownContextValue = {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
};

interface SharedDropdownProps extends Props {}

export type DropdownProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDropdownProps>;

type DropdownComponent = <C extends React.ElementType = "div">(
  props: DropdownProps<C>
) => React.ReactElement;

export type ReturnType = DropdownComponent & {
  displayName?: string;
  Trigger: typeof DropdownTrigger;
  Items: typeof DropdownItems;
  Item: typeof DropdownItem;
};
