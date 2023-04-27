import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import React, { ChangeEvent, forwardRef } from "react";
import { useId } from "../../../../../travelmakers-design-hooks/src";
import { View } from "../../View";
import useStyles from "./TertiaryTabItem.style";
import {
  TertiaryTabItemComponent,
  TertiaryTabItemProps,
} from "./TertiaryTabItem.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name?: string;
  label: string;
}

export const TertiaryTabItem: TertiaryTabItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "input">(
    {
      name = "tertiary-tab-item",
      label,
      className,
      onChange,
      ...props
    }: TertiaryTabItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const id = useId(name);
    const { classes, cx } = useStyles();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    return (
      <label className={cx(classes.label, className)} htmlFor={id}>
        <View<React.ElementType>
          component={"input"}
          ref={ref}
          type="radio"
          name={name}
          id={id}
          className={cx(classes.input, "sr-only")}
          onChange={onChangeHandler}
          {...props}
        />
        <div className={"tm-radio__content"}>{label}</div>
      </label>
    );
  }
);

TertiaryTabItem.displayName = "TertiaryTabItem";
