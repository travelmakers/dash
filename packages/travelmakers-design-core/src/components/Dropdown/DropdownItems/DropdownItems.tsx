import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./DropdownItems.style";
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
    { items, className, ...props }: DropdownItemsProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"ul"}
        className={cx(classes.root, className)}
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
