import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { createContext, forwardRef } from "react";
import { View } from "../../View";
import { TagItem } from "../TagItem";
import useStyles from "./Tag.style";
import {
  TagComponent,
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
  items: typeof TagItem[];
}

export const TagContext = createContext<Omit<Props, "gap" | "items">>({
  type: "fill",
  size: "small",
  roundness: "default",
});
TagContext.displayName = "TagContext";

export const Tag: TagComponent & {
  displayName?: string;
  Item?: typeof TagItem;
} = forwardRef(
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
);

Tag.displayName = "Tag";
Tag.Item = TagItem;
