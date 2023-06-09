import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Callout } from "../../Callout";
import { View } from "../../View";
import { SelectButtonItem } from "../SelectButtonItem";
import useStyles from "./SelectButton.style";
import { ReturnType, SelectButtonProps } from "./SelectButton.type";

export interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  label: React.ReactNode;
  items: React.ReactNode[];
  feedback?: string;
  callout?: typeof Callout;
  isVisibleLabel?: boolean;
}

export const SelectButton = forwardRef(
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
        component={"div"}
        ref={ref}
        className={classes.root}
        {...props}
      >
        <strong className={isVisibleLabel ? classes.legend : "sr-only"}>
          {label}
        </strong>
        <div className={classes.wrapper}>{items}</div>
        {feedback && <strong className={classes.feedback}>{feedback}</strong>}
      </View>
    );

    if (callout) {
      <div className={cx(classes.container, className)}>
        <>
          {content}
          {callout}
        </>
      </div>;
    }

    return content;
  }
) as unknown as ReturnType;

SelectButton.displayName = "SelectButton";
SelectButton.Item = SelectButtonItem;
SelectButton.Callout = Callout;
