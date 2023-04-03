import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { forwardRef, useContext } from "react";
import { View } from "../../View";
import { TagContext } from "../Tag/Tag";
import useStyles from "./TagItem.style";

type TagItemStylesNames = ClassNames<typeof useStyles>;

export interface Props {
  label: React.ReactNode;
}

export interface SharedTagItemProps
  extends Props,
    TmComponentProps<TagItemStylesNames> {}

export type TagItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedTagItemProps>;

type TagItemComponent = <C extends React.ElementType = "li">(
  props: TagItemProps<C>
) => React.ReactElement;

export const TagItem: TagItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "li">(
    { label, className, ...props }: TagItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { type, color, size, roundness } = useContext(TagContext);
    const { classes, cx } = useStyles({ type, color, size, roundness });

    return (
      <View
        component={"li"}
        ref={ref}
        className={cx(classes.item, className)}
        {...props}
      >
        {label}
      </View>
    );
  }
);

TagItem.displayName = "TagItem";
