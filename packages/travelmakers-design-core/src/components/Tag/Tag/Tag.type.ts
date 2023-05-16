import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { TagItem } from "../TagItem";
import { Props } from "./Tag";
import useStyles from "./Tag.style";

export type TagItemType = "fill" | "line";
export const TagItemColor = ["green", "blue", "purple", "gray"] as const;
export type TagItemColorType = typeof TagItemColor[number];
export type TagSize = "small" | "medium" | "large";
export type TagRound = "default" | "half" | "full";

type TagStylesNames = ClassNames<typeof useStyles>;

interface SharedTagProps extends Props, TmComponentProps<TagStylesNames> {}

export type TagProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedTagProps
>;

type TagComponent = <C extends React.ElementType = "ul">(
  props: TagProps<C>
) => React.ReactElement;

export type ReturnType = TagComponent & {
  displayName?: string;
  Item: typeof TagItem;
};
