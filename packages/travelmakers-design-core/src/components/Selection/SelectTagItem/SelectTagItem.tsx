import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, PropsWithChildren } from "react";
import { useId } from "../../../../../travelmakers-design-hooks/src";
import { View } from "../../View";
import useStyles from "./SelectTagItem.style";
import { ReturnType, SelectTagItemProps } from "./SelectTagItem.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
}

export const SelectTagItem = forwardRef(
  <C extends React.ElementType = "input">(
    {
      label,
      name = "select-tag-item",
      disabled,
      className,
      ...props
    }: PropsWithChildren<SelectTagItemProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const id = useId(name);
    const { classes, cx } = useStyles();

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
        <div className={"tm-select-tag__item"}>{label}</div>
      </label>
    );
  }
) as unknown as ReturnType;

SelectTagItem.displayName = "SelectTagItem";
