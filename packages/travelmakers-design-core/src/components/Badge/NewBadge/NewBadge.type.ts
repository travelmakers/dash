import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./NewBadge";
import useStyles from "./NewBadge.style";

export type NewBadgeType = "small" | "medium";

type NewBadgeStylesNames = ClassNames<typeof useStyles>;

interface SharedNewBadgeProps
  extends Props,
    TmComponentProps<NewBadgeStylesNames> {}

export type NewBadgeProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedNewBadgeProps>;

export type NewBadgeComponent = <C extends React.ElementType = "div">(
  props: NewBadgeProps<C>
) => React.ReactElement;
