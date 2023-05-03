import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import {
  DropdownItemsComponent,
  DropdownItemsProps,
} from "./DropdownItems.type";

export interface Props {
  items: React.ReactNode[];
}

export const DropdownItems: DropdownItemsComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "ul">(
    { items, ...props }: DropdownItemsProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    return (
      <View<React.ElementType>
        component={"ul"}
        role="listbox"
        ref={ref}
        {...props}
      >
        {items}
      </View>
    );
  }
);

DropdownItems.displayName = "DropdownItems";
