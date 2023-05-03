import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import React, { forwardRef, useContext } from "react";
import { View } from "../../View";
import { DropdownContext } from "../Dropdown/Dropdown";
import {
  DropdownTriggerComponent,
  DropdownTriggerProps,
} from "./DropdownTrigger.type";

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children:
    | ((props: { isToggle: boolean }) => React.ReactNode)
    | React.ReactNode;
}

export const DropdownTrigger: DropdownTriggerComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "button">(
    { onClick, className, children, ...props }: DropdownTriggerProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { isToggle, setIsToggle } = useContext(DropdownContext);

    const _children =
      typeof children === "function" ? children({ isToggle }) : children;

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsToggle((v) => !v);
      onClick?.(e);
    };

    return (
      <View<React.ElementType>
        component={"button"}
        ref={ref}
        className={className}
        onClick={onClickHandler}
        aria-haspopup="listbox"
        aria-expanded={isToggle}
        {...props}
      >
        {_children}
      </View>
    );
  }
);

DropdownTrigger.displayName = "DropdownTrigger";
