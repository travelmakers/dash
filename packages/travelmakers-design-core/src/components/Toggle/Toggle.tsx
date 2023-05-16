import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { useId } from "../../../../travelmakers-design-hooks/src";
import { View } from "../View";
import useStyles from "./Toggle.style";
import { ReturnType, ToggleProps } from "./Toggle.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  btnName: string;
  name?: string;
}

export const Toggle = forwardRef(
  <C extends React.ElementType = "input">(
    { btnName, name = "toggle", className, ...props }: ToggleProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const id = useId(name);
    const { classes, cx } = useStyles();

    return (
      <label
        htmlFor={id}
        className={cx(classes.root, className)}
        aria-label={btnName}
      >
        <View<React.ElementType>
          id={id}
          className={cx(classes.input, "sr-only")}
          component={"input"}
          type={"checkbox"}
          ref={ref}
          {...props}
        />
        <div className={"tm-toggle"} />
      </label>
    );
  }
) as unknown as ReturnType;

Toggle.displayName = "Toggle";
