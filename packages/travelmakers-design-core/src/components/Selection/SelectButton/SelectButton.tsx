import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, PropsWithChildren } from "react";
import { View } from "../../View";
import { SelectButtonItem } from "../SelectButtonItem";
import useStyles from "./SelectButton.style";
import { SelectButtonComponent, SelectButtonProps } from "./SelectButton.type";

export interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  label: string;
  items: React.ReactNode[];
  feedback?: string;
}

export const SelectButton: SelectButtonComponent & {
  displayName?: string;
  Item?: typeof SelectButtonItem;
} = forwardRef(
  <C extends React.ElementType = "fieldset">(
    {
      label,
      items,
      feedback,
      className,
      children,
      ...props
    }: PropsWithChildren<SelectButtonProps<C>>,
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
        <legend className={classes.legend}>{label}</legend>
        <div className={classes.wrapper}>{items}</div>
        {feedback && <strong className={classes.feedback}>{feedback}</strong>}
      </View>
    );
  }
);

SelectButton.displayName = "SelectButton";
SelectButton.Item = SelectButtonItem;
