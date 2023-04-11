import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import useStyles from "./NavLink.style";
import { NavLinkComponent, NavLinkProps } from "./NavLink.type";

export interface Props extends LinkProps {
  label: string;
  isDisable?: boolean;
}

export const NavLink: NavLinkComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "a">(
    { label, isDisable = false, className, ...props }: NavLinkProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ isDisable });

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisable) return e.preventDefault();

      props.onClick && props.onClick();
    };

    return (
      <Link
        ref={ref}
        className={cx(classes.root, "sub-element", className)}
        onClick={onClickHandler}
        tabindex={isDisable ? -1 : 0}
        aria-disabled={isDisable}
        {...props}
      >
        {label}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";
