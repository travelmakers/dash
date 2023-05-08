import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./DotBadge";
import useStyles from "./DotBadge.style";

type DotBadgeStylesNames = ClassNames<typeof useStyles>;

export type DotBadgeType = "text" | "number" | "bullet";
type DotBadgeNormalSize = "small" | "medium" | "large";
type DotBadgeBulletSize = DotBadgeNormalSize | "xLarge";
export type DotBadgeSize<T> = T extends "bullet"
  ? DotBadgeBulletSize
  : DotBadgeNormalSize;

interface SharedDotBadgeProps
  extends Props<DotBadgeType>,
    TmComponentProps<DotBadgeStylesNames> {}

export type DotBadgeProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDotBadgeProps>;

export type DotBadgeComponent = <C extends React.ElementType = "div">(
  props: DotBadgeProps<C>
) => React.ReactElement;
