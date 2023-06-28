export type CalendarEvent = { startDate: Date; endDate: Date; note: string };
export type CalendarEventIndex = { [key: string]: number[] };
export interface CalendarNewEvents extends CalendarEvent {
  dates: string[];
}
export interface CalendarState {
  days: string[];
  month: string[];
  year: number[];
  weeks?: Week[][];
  events?: { dates: string[]; startDate: Date; endDate: Date; note: string }[];
  init?: {
    days: string[];
    month: string[];
    year: number[];
    weeks?: Week[][];
  };
}

export type Week = {
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

// ===========
const GET_NEXT_MONTH = "GET_NEXT_MONTH";
const GET_INFINITE_NEXT_MONTH = "GET_INFINITE_NEXT_MONTH";
const GET_PREV_MONTH = "GET_PREV_MONTH";
const SET_DATE = "SET_DATE";
const SET_OPTIONS = "SET_OPTIONS";
const ADD_EVENT = "ADD_EVENT";
const REMOVE_EVENT = "REMOVE_EVENT";
const CLEAR = "CLEAR";

export {
  GET_NEXT_MONTH,
  GET_INFINITE_NEXT_MONTH,
  GET_PREV_MONTH,
  SET_DATE,
  ADD_EVENT,
  REMOVE_EVENT,
  SET_OPTIONS,
  CLEAR,
};
