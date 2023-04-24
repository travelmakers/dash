import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import React, {
  ChangeEvent,
  forwardRef,
  PropsWithChildren,
  useState,
} from "react";
import { View } from "../../View";
import useStyles from "./TertiaryTabItem.style";
import {
  TertiaryTabItemComponent,
  TertiaryTabItemProps,
} from "./TertiaryTabItem.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
}

let defaultId = 0;

export const TertiaryTabItem: TertiaryTabItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "input">(
    {
      label,
      className,
      children,
      onChange,
      ...props
    }: PropsWithChildren<TertiaryTabItemProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();
    const [id] = useState(() => String(defaultId++));
    const elementId = `tm-tertiary-${id}`;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    return (
      <label className={cx(classes.label, className)} htmlFor={elementId}>
        <View<React.ElementType>
          component={"input"}
          ref={ref}
          type="radio"
          name="tertiary"
          id={elementId}
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
