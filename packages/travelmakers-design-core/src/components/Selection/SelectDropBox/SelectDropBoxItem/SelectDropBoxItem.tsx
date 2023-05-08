import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef, useContext } from "react";
import { Divider } from "../../../Divider";
import { Dropdown, DropdownItemProps } from "../../../Dropdown";
import { View } from "../../../View";
import { SelectDropBoxContext } from "../SelectDropBox/SelectDropBox";
import useStyles from "./SelectDropBoxItem.style";
import {
  SelectDropBoxItemComponent,
  SelectDropBoxItemProps,
} from "./SelectDropBoxItem.type";

export interface Props
  extends Omit<DropdownItemProps<typeof Dropdown.Item>, "ariaSelected"> {
  value: string;
}

export const SelectDropBoxItem: SelectDropBoxItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = typeof Dropdown.Item>(
    { value, className, onClick, ...props }: SelectDropBoxItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { type, currentValue, setCurrentValue } =
      useContext(SelectDropBoxContext);
    const isSelected = currentValue === value;
    const { classes, cx } = useStyles({ type, isSelected });

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
        <Divider type={"horizontal"} color={"outline"} />
        <span className={classes.content}>{value}</span>
      </View>
    );
  }
);

SelectDropBoxItem.displayName = "SelectDropBoxItem";
