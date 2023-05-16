import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, useContext } from "react";
import { Dropdown, DropdownItemsProps } from "../../../Dropdown";
import { View } from "../../../View";
import { SelectDropBoxContext } from "../SelectDropBox/SelectDropBox";
import useStyles from "./SelectDropBoxItems.style";
import { ReturnType, SelectDropBoxItemsProps } from "./SelectDropBoxItems.type";

export interface Props extends DropdownItemsProps<typeof Dropdown.Items> {}

export const SelectDropBoxItems = forwardRef(
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
) as unknown as ReturnType;

SelectDropBoxItems.displayName = "SelectDropBoxItems";
