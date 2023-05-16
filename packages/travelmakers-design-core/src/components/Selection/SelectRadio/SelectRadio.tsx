import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { View } from "../../View";
import { SelectRadioItem } from "../SelectRadioItem";
import useStyles from "./SelectRadio.style";
import { ReturnType, SelectRadioProps } from "./SelectRadio.type";

export interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  items: React.ReactNode[];
}

export const SelectRadio = forwardRef(
  <C extends React.ElementType = "fieldset">(
    { className, items, ...props }: SelectRadioProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"fieldset"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        {items}
      </View>
    );
  }
) as unknown as ReturnType;

SelectRadio.displayName = "SelectRadio";
SelectRadio.Item = SelectRadioItem;
