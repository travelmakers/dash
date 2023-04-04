import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./TagItem";
import useStyles from "./TagItem.style";

type TagItemStylesNames = ClassNames<typeof useStyles>;

interface SharedTagItemProps
  extends Props,
    TmComponentProps<TagItemStylesNames> {}

export type TagItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedTagItemProps>;

export type TagItemComponent = <C extends React.ElementType = "li">(
  props: TagItemProps<C>
) => React.ReactElement;
