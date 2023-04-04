import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./Tag";
import useStyles from "./Tag.style";

export type TagItemType = "fill" | "line";
export type TagItemColor = "green" | "blue" | "purple" | "gray";
export type TagSize = "small" | "medium" | "large";
export type TagRound = "default" | "half" | "full";

type TagStylesNames = ClassNames<typeof useStyles>;

interface SharedTagProps extends Props, TmComponentProps<TagStylesNames> {}

export type TagProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedTagProps
>;

export type TagComponent = <C extends React.ElementType = "ul">(
  props: TagProps<C>
) => React.ReactElement;
