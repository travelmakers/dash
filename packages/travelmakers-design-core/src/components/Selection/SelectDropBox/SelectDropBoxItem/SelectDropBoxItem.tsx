import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, useContext } from "react";
import { Divider } from "../../../Divider";
import { Dropdown, DropdownItemProps } from "../../../Dropdown";
import { View } from "../../../View";
import { SelectDropBoxContext } from "../SelectDropBox/SelectDropBox";
import useStyles from "./SelectDropBoxItem.style";
import { ReturnType, SelectDropBoxItemProps } from "./SelectDropBoxItem.type";

export interface Props
  extends Omit<DropdownItemProps<typeof Dropdown.Item>, "ariaSelected"> {
  value: React.ReactNode;
}

export const SelectDropBoxItem = forwardRef(
  <C extends React.ElementType = typeof Dropdown.Item>(
    { value, className, onClick, ...props }: SelectDropBoxItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { type, currentValue, setCurrentValue, direction } =
      useContext(SelectDropBoxContext);
    const isSelected = currentValue === value;
    const { classes, cx } = useStyles({ type, isSelected, direction });

    const onClickHandler = (value) => {
      setCurrentValue(value);
      onClick?.();
    };

    return (
      <View<React.ElementType>
        component={Dropdown.Item}
        ref={ref}
        className={cx(classes.root, className)}
        ariaSelected={currentValue === value}
        onClick={() => onClickHandler(value)}
        {...props}
      >
        {direction === "forward" && (
          <Divider type={"horizontal"} color={"outline"} />
        )}
        <span className={classes.content}>{value}</span>
        {direction === "reverse" && (
          <Divider type={"horizontal"} color={"outline"} />
        )}
      </View>
    );
  }
) as unknown as ReturnType;

SelectDropBoxItem.displayName = "SelectDropBoxItem";
