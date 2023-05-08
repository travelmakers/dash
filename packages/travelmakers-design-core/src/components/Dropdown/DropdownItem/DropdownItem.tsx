import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { PropsWithChildren, forwardRef, useContext } from "react";
import { View } from "../../View";
import { DropdownContext } from "../Dropdown/Dropdown";
import { DropdownItemComponent, DropdownItemProps } from "./DropdownItem.type";

export interface Props {
  ariaSelected: boolean;
}

export const DropdownItem: DropdownItemComponent & {
  displayName?: string;
} = forwardRef(
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
);

DropdownItem.displayName = "DropdownItem";
