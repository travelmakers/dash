import { PolymorphicRef } from "@travelmakers/styles";
import React, { PropsWithChildren, forwardRef, useContext } from "react";
import { View } from "../../View";
import { DropdownContext } from "../Dropdown/Dropdown";
import { DropdownItemProps, ReturnType } from "./DropdownItem.type";

export interface Props {
  ariaSelected: boolean;
}

export const DropdownItem = forwardRef(
  <C extends React.ElementType = "li">(
    {
      ariaSelected,
      onClick,
      children,
      ...props
    }: PropsWithChildren<DropdownItemProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { isToggle, setIsToggle } = useContext(DropdownContext);

    const onClickHandler = () => {
      setIsToggle(false);
      onClick?.();
    };

    return (
      <View<React.ElementType>
        component={"li"}
        ref={ref}
        onClick={onClickHandler}
        tabIndex={isToggle ? 0 : -1}
        aria-selected={ariaSelected}
        role="option"
        {...props}
      >
        {children}
      </View>
    );
  }
) as unknown as ReturnType;

DropdownItem.displayName = "DropdownItem";
