import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./StatusCard";
import useStyles from "./StatusCard.style";

type StatusCardStylesNames = ClassNames<typeof useStyles>;

interface SharedStatusCardProps
  extends Props,
    TmComponentProps<StatusCardStylesNames> {}

export type StatusCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedStatusCardProps>;

type StatusCardComponent = <C extends React.ElementType = "div">(
  props: StatusCardProps<C>
) => React.ReactElement;

export type ReturnType = StatusCardComponent & {
  displayName?: string;
};
