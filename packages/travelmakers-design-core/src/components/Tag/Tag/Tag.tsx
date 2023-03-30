import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { createContext, forwardRef, PropsWithChildren, useEffect } from "react";
import { View } from "../../View";
import { TagItem } from "../TagItem";
import useStyles from "./Tag.style";

export interface Props {
  type: TagItemType;
  color: TagItemColor;
  size?: TagSize;
  gap?: number;
  roundness?: TagRound;
}

export const TagContext = createContext<Omit<Props, "gap">>({
  type: "fill",
  color: "green",
  size: "small",
  roundness: "default",
});
TagContext.displayName = "TagContext";

export type TagStylesNames = ClassNames<typeof useStyles>;

export type TagItemType = "fill" | "line";
export type TagItemColor = "green" | "blue" | "purple" | "gray";
export type TagSize = "small" | "medium" | "large";
export type TagRound = "default" | "half" | "full";

export interface SharedTagProps
  extends Props,
    TmComponentProps<TagStylesNames> {}

export type TagProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedTagProps
>;

type TagComponent = <C extends React.ElementType = "ul">(
  props: TagProps<C>
) => React.ReactElement;

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
      className,
      children,
      ...props
    }: PropsWithChildren<TagProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    useEffect(() => {
      if (!children)
        console.error("1개 이상의 <Tag.Item /> 컴포넌트가 존재해야 합니다.");
    }, []);

    const { classes, cx } = useStyles({ gap });

    return (
      <TagContext.Provider value={{ type, color, size, roundness }}>
        <View<React.ElementType>
          component={"ul"}
          ref={ref}
          className={cx(classes.root, className)}
          {...props}
        >
          {children}
        </View>
      </TagContext.Provider>
    );
  }
);

Tag.displayName = "Tag";
Tag.Item = TagItem;
