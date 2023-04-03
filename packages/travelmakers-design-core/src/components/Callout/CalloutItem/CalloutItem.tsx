import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./CalloutItem.style";

export type CalloutItemStylesNames = ClassNames<typeof useStyles>;

export interface Props {
  content: string;
  isEmpty?: boolean;
}
export interface SharedCalloutItemProps
  extends Props,
    TmComponentProps<CalloutItemStylesNames> {}

export type CalloutItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedCalloutItemProps>;

type CalloutItemComponent = <C extends React.ElementType = "dd">(
  props: CalloutItemProps<C>
) => React.ReactElement;

export const CalloutItem: CalloutItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "dd">(
    { content, isEmpty = false, className, ...props }: CalloutItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"dd"}
        ref={ref}
        className={cx(classes.root, className, { "sr-only": isEmpty })}
        {...props}
      >
        {content}
      </View>
    );
  }
);

CalloutItem.displayName = "CalloutItem";
