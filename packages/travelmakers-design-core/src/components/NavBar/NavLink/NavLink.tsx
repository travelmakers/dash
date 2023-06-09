import { PolymorphicRef } from "@travelmakers/styles";
import Link, { LinkProps } from "next/link";
import React, { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./NavLink.style";
import { NavLinkProps, ReturnType } from "./NavLink.type";

export interface Props extends LinkProps {
  label: string;
  isDisable?: boolean;
}

export const NavLink = forwardRef(
  <C extends React.ElementType = typeof Link>(
    { label, isDisable = false, className, ...props }: NavLinkProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ isDisable });

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisable) return e.preventDefault();

      props.onClick && props.onClick();
    };

    return (
      <View<React.ElementType>
        component={Link}
        ref={ref}
        className={cx(classes.root, className)}
        onClick={onClickHandler}
        tabindex={isDisable ? -1 : 0}
        aria-disabled={isDisable}
        {...props}
      >
        {label}
      </View>
    );
  }
) as unknown as ReturnType;

NavLink.displayName = "NavLink";
