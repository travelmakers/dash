import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { useId } from "../../../../../travelmakers-design-hooks/src";
import { View } from "../../View";
import useStyles from "./SelectRadioItem.style";
import {
  SelectRadioItemComponent,
  SelectRadioItemProps,
} from "./SelectRadioItem.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  isVisibleLabel?: boolean;
}

export const SelectRadioItem: SelectRadioItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "input">(
    {
      label,
      name = "select-radio-item",
      isVisibleLabel = true,
      disabled,
      className,
      ...props
    }: SelectRadioItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const id = useId(name);
    const { classes, cx } = useStyles({ isVisibleLabel, disabled });

    return (
      <label htmlFor={id} className={cx(classes.root, className)}>
        <View<React.ElementType>
          id={id}
          component={"input"}
          type={"radio"}
          ref={ref}
          className={cx(classes.input, "sr-only")}
          name={name}
          disabled={disabled}
          {...props}
        />
        <div className={"tm-select-radio__item"} />
        <div
          className={
            isVisibleLabel ? "tm-select-radio__item__label" : "sr-only"
          }
        >
          {label}
        </div>
      </label>
    );
  }
);

SelectRadioItem.displayName = "SelectRadioItem";
