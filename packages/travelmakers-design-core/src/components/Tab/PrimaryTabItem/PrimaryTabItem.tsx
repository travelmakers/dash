import { PolymorphicRef } from "@travelmakers/styles";
import React, { ChangeEvent, forwardRef } from "react";
import { useId } from "../../../../../travelmakers-design-hooks/src";
import { Divider } from "../../Divider";
import { View } from "../../View";
import useStyles from "./PrimaryTabItem.style";
import {
  PrimaryTabItemComponent,
  PrimaryTabItemProps,
} from "./PrimaryTabItem.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name?: string;
  label: string;
}

export const PrimaryTabItem: PrimaryTabItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "input">(
    {
      name = "primary-tab-item",
      label,
      className,
      onChange,
      ...props
    }: PrimaryTabItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const id = useId(name);
    const { classes, cx } = useStyles();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    return (
      <li className={cx(classes.item, className)}>
        <label htmlFor={id} className={classes.label}>
          <View<React.ElementType>
            component={"input"}
            id={id}
            ref={ref}
            type="radio"
            name={name}
            className={cx(classes.input, "sr-only")}
            onChange={onChangeHandler}
            {...props}
          />
          <div className={"tm-tab__content"}>{label}</div>
        </label>
        <Divider className={"tm-tab__divider"} type="vertical" height="20px" />
      </li>
    );
  }
);

PrimaryTabItem.displayName = "PrimaryTabItem";
