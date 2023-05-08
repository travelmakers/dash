import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, useContext } from "react";
import { Dropdown, DropdownItemsProps } from "../../../Dropdown";
import { View } from "../../../View";
import { SelectDropBoxContext } from "../SelectDropBox/SelectDropBox";
import useStyles from "./SelectDropBoxItems.style";
import {
  SelectDropBoxItemsComponent,
  SelectDropBoxItemsProps,
} from "./SelectDropBoxItems.type";

export interface Props extends DropdownItemsProps<typeof Dropdown.Items> {}

export const SelectDropBoxItems: SelectDropBoxItemsComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = typeof Dropdown.Items>(
    { className, ...props }: SelectDropBoxItemsProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { type, disabled } = useContext(SelectDropBoxContext);
    const { classes, cx } = useStyles({ type, disabled });

    return (
      <View<React.ElementType>
        component={Dropdown.Items}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      />
    );
  }
);

SelectDropBoxItems.displayName = "SelectDropBoxItems";
