import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./StatusCard";
import useStyles from "./StatusCard.style";

type StatusCardStylesNames = ClassNames<typeof useStyles>;

interface SharedStatusCardProps
  extends Props,
    TmComponentProps<StatusCardStylesNames> {}

export type StatusCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedStatusCardProps>;

export type StatusCardComponent = <C extends React.ElementType = "div">(
  props: StatusCardProps<C>
) => React.ReactElement;
