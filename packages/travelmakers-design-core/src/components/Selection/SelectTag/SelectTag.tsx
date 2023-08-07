import { CSSObject, PolymorphicRef } from "@travelmakers/styles";
import React, { PropsWithChildren, forwardRef } from "react";
import { View } from "../../View";
import { SelectTagItem } from "../SelectTagItem/SelectTagItem";
import useStyles from "./SelectTag.style";
import { ReturnType, SelectTagProps } from "./SelectTag.type";

export interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  items: React.ReactNode[];
  gap?: CSSObject["gap"];
}

export const SelectTag = forwardRef(
  <C extends React.ElementType = "fieldset">(
    {
      className,
      items,
      gap = 8,
      ...props
    }: PropsWithChildren<SelectTagProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ gap });

    return (
      <View<React.ElementType>
        component={"ul"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        {items}
      </View>
    );
  }
) as unknown as ReturnType;

SelectTag.displayName = "SelectTag";
SelectTag.Item = SelectTagItem;
