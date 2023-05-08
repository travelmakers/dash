import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef, useContext } from "react";
import { View } from "../../View";
import { TagContext } from "../Tag/Tag";
import { TagItemColorType } from "../Tag/Tag.type";
import useStyles from "./TagItem.style";
import { TagItemComponent, TagItemProps } from "./TagItem.type";

export interface Props {
  colorIdx?: number;
  label: React.ReactNode;
}

export const TagItem: TagItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "li">(
    { colorIdx = 0, label, className, ...props }: TagItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const generateColor = (_colorIdx: number) => {
      const colors = ["green", "blue", "purple"];
      return colors[_colorIdx % colors.length] as Exclude<
        TagItemColorType,
        "gray"
      >;
    };

    const { type, color, size, roundness } = useContext(TagContext);

    const { classes, cx } = useStyles({
      type,
      color: color || generateColor(colorIdx),
      size,
      roundness,
    });

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
