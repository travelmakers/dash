import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import React, { forwardRef } from "react";
import { Callout } from "../../Callout";
import { View } from "../../View";
import { SelectButtonItem } from "../SelectButtonItem";
import useStyles from "./SelectButton.style";
import { SelectButtonComponent, SelectButtonProps } from "./SelectButton.type";

export interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  label: string;
  items: typeof SelectButtonItem[];
  feedback?: string;
  callout?: typeof Callout;
  isVisibleLabel?: boolean;
}

export const SelectButton: SelectButtonComponent & {
  displayName?: string;
  Item?: typeof SelectButtonItem;
  Callout?: typeof Callout;
} = forwardRef(
  <C extends React.ElementType = "fieldset">(
    {
      label,
      items,
      feedback,
      callout,
      isVisibleLabel = false,
      className,
      ...props
    }: SelectButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    const content = (
      <View<React.ElementType>
        component={"fieldset"}
        ref={ref}
        className={classes.root}
        {...props}
      >
        <legend className={isVisibleLabel ? classes.legend : "sr-only"}>
          {label}
        </legend>
        <div className={classes.wrapper}>{items}</div>
        {feedback && <strong className={classes.feedback}>{feedback}</strong>}
      </View>
    );

    if (callout) {
      return (
        <div className={cx(classes.container, className)}>
          {content}
          {callout}
        </div>
      );
    }

    return content;
  }
);

SelectButton.displayName = "SelectButton";
SelectButton.Item = SelectButtonItem;
SelectButton.Callout = Callout;
