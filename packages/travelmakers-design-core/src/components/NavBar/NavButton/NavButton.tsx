import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./NavButton.style";
import { NavButtonProps, ReturnType } from "./NavButton.type";

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  isDisable?: boolean;
}

export const NavButton = forwardRef(
  <C extends React.ElementType = "button">(
    { label, isDisable = false, className, ...props }: NavButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"button"}
        ref={ref}
        className={cx(classes.root, className)}
        disabled={isDisable}
        {...props}
      >
        {label}
      </View>
    );
  }
) as unknown as ReturnType;

NavButton.displayName = "NavButton";
