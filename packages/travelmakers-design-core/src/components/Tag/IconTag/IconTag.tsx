import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { Icon } from "../../Icon";
import { View } from "../../View";
import { TagItemType } from "../Tag/Tag";
import useStyles from "./IconTag.style";

export type IconTagStylesNames = ClassNames<typeof useStyles>;

export interface Props {
  type: TagItemType;
  label?: React.ReactNode;
}
export interface SharedIconTagProps
  extends Props,
    TmComponentProps<IconTagStylesNames> {}

export type IconTagProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedIconTagProps>;

type IconTagComponent = <C extends React.ElementType = "div">(
  props: IconTagProps<C>
) => React.ReactElement;

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
