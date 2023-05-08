import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { useId } from "../../../../../travelmakers-design-hooks/src";
import { View } from "../../View";
import useStyles from "./SelectButtonItem.style";
import {
  SelectButtonItemComponent,
  SelectButtonItemProps,
} from "./SelectButtonItem.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name?: string;
  content: string | number;
}

export const SelectButtonItem: SelectButtonItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "input">(
    {
      name = "select-button-item",
      content,
      className,
      ...props
    }: SelectButtonItemProps<C>,
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
          {...props}
        />
        <div className="select-button-item__content">{content}</div>
      </label>
    );
  }
);

SelectButtonItem.displayName = "SelectButtonItem";
