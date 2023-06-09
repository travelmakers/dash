import { PolymorphicRef } from "@travelmakers/styles";
import React, { createContext, forwardRef } from "react";
import { View } from "../../View";
import { TagItem } from "../TagItem";
import useStyles from "./Tag.style";
import {
  ReturnType,
  TagItemColorType,
  TagItemType,
  TagProps,
  TagRound,
  TagSize,
} from "./Tag.type";

export interface Props {
  type: TagItemType;
  color?: TagItemColorType;
  size?: TagSize;
  gap?: number;
  roundness?: TagRound;
  items: React.ReactNode[];
}

export const TagContext = createContext<Omit<Props, "gap" | "items">>({
  type: "fill",
  size: "small",
  roundness: "default",
});
TagContext.displayName = "TagContext";

export const Tag = forwardRef(
  <C extends React.ElementType = "ul">(
    {
      type,
      color,
      size = "small",
      gap = 0,
      roundness = "default",
      items,
      className,
      ...props
    }: TagProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ gap });

    return (
      <TagContext.Provider value={{ type, color, size, roundness }}>
        <View<React.ElementType>
          component={"ul"}
          ref={ref}
          className={cx(classes.root, className)}
          {...props}
        >
          {items}
        </View>
      </TagContext.Provider>
    );
  }
) as unknown as ReturnType;

Tag.displayName = "Tag";
Tag.Item = TagItem;
