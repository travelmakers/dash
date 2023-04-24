import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./Calendar";
import useStyles from "./Calendar.style";

type CalendarStylesNames = ClassNames<typeof useStyles>;

export type week = {
  date: Date;
  dayOfWeek: string;
  dayOfYear: number;
  dayOfMonth: number;
  isToday: boolean;
  isSameMonth: boolean;
  isWeekend: boolean;
  dayIndex: number;
  weekIndex: number;
  events: any;
  month: string;
  year: number;
};

interface SharedCalendarProps
  extends Props,
    TmComponentProps<CalendarStylesNames> {}

export type CalendarProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedCalendarProps>;

export type CalendarComponent = <C extends React.ElementType = "div">(
  props: CalendarProps<C>
) => React.ReactElement;
