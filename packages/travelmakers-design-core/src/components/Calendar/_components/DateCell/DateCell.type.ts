import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./DateCell";
import useStyles from "./DateCell.style";

type DateCellStylesNames = ClassNames<typeof useStyles>;

interface SharedDateCellProps
  extends Props,
    TmComponentProps<DateCellStylesNames> {}

export type DateCellProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDateCellProps>;

type DateCellComponent = <C extends React.ElementType = "td">(
  props: DateCellProps<C>
) => React.ReactElement;

export type DateCellType =
  | "default"
  | "default-between"
  | "disabled-between"
  | "disabled-to-between"
  | "not-allowed-between"
  | "not-allowed-to-between"
  | "to-between"
  | "focus"
  | "from"
  | "to"
  | "disabled"
  | "not-allowed"
  | "forbidden";

export type DateCellDay = {
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
  disabled: boolean;
};

export type ReturnType = DateCellComponent & {
  displayName?: string;
};
