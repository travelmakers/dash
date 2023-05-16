import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./Calendar";
import useStyles from "./Calendar.style";
import { DateCellDay } from "./_components/DateCell/DateCell.type";
import OptionBox from "./_components/OptionBox";

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

export interface SelectedDays {
  from: DateCellDay;
  to: DateCellDay;
}

interface SharedCalendarProps
  extends Props,
    TmComponentProps<CalendarStylesNames> {}

export type CalendarProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedCalendarProps>;

type CalendarComponent = <C extends React.ElementType = "div">(
  props: CalendarProps<C>
) => React.ReactElement;

export type ReturnType = CalendarComponent & {
  displayName?: string;
  OptionBox: typeof OptionBox;
};
