import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, useContext } from "react";
import { View } from "../../View";
import { TagContext } from "../Tag/Tag";
import useStyles from "./TagItem.style";
import { TagItemComponent, TagItemProps } from "./TagItem.type";

export interface Props {
  label: React.ReactNode;
}

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
      <View<React.ElementType>
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
