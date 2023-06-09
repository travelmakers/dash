import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { useId } from "../../../../../travelmakers-design-hooks/src";
import { View } from "../../View";
import useStyles from "./SelectRadioItem.style";
import { ReturnType, SelectRadioItemProps } from "./SelectRadioItem.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  name?: string;
  isVisibleButton?: boolean;
  isVisibleLabel?: boolean;
}

export const SelectRadioItem = forwardRef(
  <C extends React.ElementType = "input">(
    {
      label,
      name = "select-radio-item",
      isVisibleButton = true,
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
        {isVisibleButton && <div className={"tm-select-radio__item"} />}
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
) as unknown as ReturnType;

SelectRadioItem.displayName = "SelectRadioItem";
