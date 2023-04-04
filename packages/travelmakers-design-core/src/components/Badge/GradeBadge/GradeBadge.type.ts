import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./GradeBadge";
import useStyles from "./GradeBadge.style";

export type GradeBadgeType = "grade" | "minihotel" | "residence";

type GradeBadgeStylesNames = ClassNames<typeof useStyles>;

interface SharedGradeBadgeProps
  extends Props,
    TmComponentProps<GradeBadgeStylesNames> {}

export type GradeBadgeProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedGradeBadgeProps>;

export type GradeBadgeComponent = <C extends React.ElementType = "div">(
  props: GradeBadgeProps<C>
) => React.ReactElement;
