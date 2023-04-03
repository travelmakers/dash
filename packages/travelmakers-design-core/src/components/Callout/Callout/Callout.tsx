import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import { CalloutHeader } from "../CalloutHader";
import { CalloutItem } from "../CalloutItem";
import useStyles from "./Callout.style";

export type CalloutStylesNames = ClassNames<typeof useStyles>;

export type CalloutType = "default" | "warning";

export interface Props {
  type?: CalloutType;
  title: string;
  items?: string[];
  emptyText?: string;
}
export interface SharedCalloutProps
  extends Props,
    TmComponentProps<CalloutStylesNames> {}

export type CalloutProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedCalloutProps>;

type CalloutComponent = <C extends React.ElementType = "dl">(
  props: CalloutProps<C>
) => React.ReactElement;

export const Callout: CalloutComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "dl">(
    {
      type = "default",
      title,
      items = [],
      emptyText = "",
      className,
      ...props
    }: CalloutProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const isEmptyItems = items.length === 0;
    const { classes, cx } = useStyles();

    const _items = !isEmptyItems ? (
      items.map((item, idx) => <CalloutItem key={idx} content={item} />)
    ) : (
      <CalloutItem content={emptyText} isEmpty />
    );

    return (
      <View<React.ElementType>
        component={"dl"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <CalloutHeader type={type} title={title} />
        {_items}
      </View>
    );
  }
);

Callout.displayName = "Callout";
