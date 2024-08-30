import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./GradeBadge";
import useStyles from "./GradeBadge.style";

export type GradeBadgeType = "hotel" | "minihotel" | "residence" | 'co-living';

type GradeBadgeStylesNames = ClassNames<typeof useStyles>;

interface SharedGradeBadgeProps
  extends Props,
    TmComponentProps<GradeBadgeStylesNames> {}

export type GradeBadgeProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedGradeBadgeProps>;

type GradeBadgeComponent = <C extends React.ElementType = "div">(
  props: GradeBadgeProps<C>
) => React.ReactElement;

export type ReturnType = GradeBadgeComponent & {
  displayName?: string;
};
