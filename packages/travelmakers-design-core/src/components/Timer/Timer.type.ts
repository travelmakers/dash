import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./Timer";
import useStyles from "./Timer.style";

export type TimerType = "navy" | "white";
export type TimerSize = "small" | "large";

type TimerStylesNames = ClassNames<typeof useStyles>;

interface SharedTimerProps extends Props, TmComponentProps<TimerStylesNames> {}

export type TimerProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedTimerProps
>;

export type TimerComponent = <C extends React.ElementType = "div">(
  props: TimerProps<C>
) => React.ReactElement;
