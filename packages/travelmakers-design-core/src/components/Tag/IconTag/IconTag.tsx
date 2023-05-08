import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Icon } from "../../Icon";
import { View } from "../../View";
import { TagItemType } from "../Tag/Tag.type";
import useStyles from "./IconTag.style";
import { IconTagComponent, IconTagProps } from "./IconTag.type";

export interface Props {
  type: TagItemType;
  label?: React.ReactNode;
}

export const IconTag: IconTagComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type,
      component,
      label = "쿠폰 적용가",
      className,
      ...props
    }: IconTagProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type });

    return (
      <View<React.ElementType>
        component={component || "div"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <Icon src={"IcDiscount"} width={16} height={16} />
        {label}
      </View>
    );
  }
);

IconTag.displayName = "IconTag";
