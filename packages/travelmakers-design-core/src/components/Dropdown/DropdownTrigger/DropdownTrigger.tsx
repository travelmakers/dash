import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, useContext } from "react";
import { View } from "../../View";
import { DropdownContext } from "../Dropdown/Dropdown";
import useStyles from "./DropdownTrigger.style";
import { DropdownTriggerProps, ReturnType } from "./DropdownTrigger.type";

// @ts-ignore
export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children:
    | ((props: { isToggle: boolean }) => React.ReactNode)
    | React.ReactNode;
}

export const DropdownTrigger = forwardRef(
  <C extends React.ElementType = "button">(
    { onClick, className, children, ...props }: DropdownTriggerProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();
    const { isToggle, setIsToggle } = useContext(DropdownContext);

    const content =
      typeof children === "function" ? children({ isToggle }) : children;

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsToggle((v) => !v);
      onClick?.(e);
    };

    return (
      <View<React.ElementType>
        ref={ref}
        component={"button"}
        type="button"
        className={cx(classes.root, className)}
        onClick={onClickHandler}
        aria-haspopup="listbox"
        aria-expanded={isToggle}
        tabIndex={-1}
        {...props}
      >
        {content}
      </View>
    );
  }
) as unknown as ReturnType;

DropdownTrigger.displayName = "DropdownTrigger";
