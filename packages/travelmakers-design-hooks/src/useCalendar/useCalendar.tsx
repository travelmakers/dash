import { addMonths, format } from "date-fns";
import { ko } from "date-fns/locale";
import { useEffect, useReducer } from "react";
import {
  addEvent,
  createEvents,
  getDays,
  removeEvent,
} from "./useCalendar.date";
import * as actionTypes from "./useCalendar.type";
import { CalendarState } from "./useCalendar.type";

const initialState = {
  startDate: null,
  year: [],
  month: [],
  days: [],
  weeks: [],
  events: [],
  eventsIndex: {},
  options: {
    numOfDays: 7,
    rtl: false,
    locale: ko,
  },
};

function dateDep(date) {
  return date ? format(date, "yyyy-MM-dd") : null;
}

function reducer(state, action): CalendarState {
  switch (action.type) {
    case actionTypes.SET_OPTIONS:
      return {
        ...state,
        ...createEvents(action.options, state),
        options: { ...state.options, ...action.options },
      };
    case actionTypes.SET_DATE:
      const days = getDays(action.date, state);
      if (days.year !== null) {
        return {
          ...state,
          ...getDays(action.date, state),
          month: [...state.month, getDays(action.date, state).month],
          year: [...state.year, getDays(action.date, state).year],
        };
      }
      return {
        ...state,
        month: [...state.month],
        year: [...state.year],
      };
    case actionTypes.GET_INFINITE_NEXT_MONTH:
      const nextMonths = getDays(addMonths(state.startDate, 1), state);
      if (
        nextMonths.year !== null &&
        state.month[state.month.length - 1] !== nextMonths.month
      ) {
        state.weeks.push(...nextMonths.weeks);
        return {
          ...state,
          ...nextMonths,
          weeks: state.weeks,
          month: [...state.month, nextMonths.month],
          year: [...state.year, nextMonths.year],
        };
      }
      return {
        ...state,
        weeks: state.weeks,
        month: [...state.month],
        year: [...state.year],
      };
    case actionTypes.CLEAR:
      return {
        days: [],
        month: [],
        year: [],
      };
    case actionTypes.GET_NEXT_MONTH:
      return {
        ...state,
        ...getDays(addMonths(state.startDate, 1), state),
        month: [
          ...state.month,
          getDays(addMonths(state.startDate, 1), state).month,
        ],
        year: [
          ...state.year,
          getDays(addMonths(state.startDate, 1), state).year,
        ],
      };
    case actionTypes.GET_PREV_MONTH:
      return {
        ...state,
        ...getDays(addMonths(state.startDate, -1), state),
        month: [
          ...state.month,
          getDays(addMonths(state.startDate, -1), state).month,
        ],
        year: [
          ...state.year,
          getDays(addMonths(state.startDate, -1), state).year,
        ],
      };
    case actionTypes.ADD_EVENT:
      return {
        ...state,
        ...addEvent(action.event, state),
      };
    case actionTypes.REMOVE_EVENT:
      return {
        ...state,
        ...removeEvent(action.id, state),
      };
    default:
      return state;
  }
}

function initialize(date, options) {
  const events = {
    ...initialState,
    ...createEvents(options, initialState),
    options: { ...initialState.options, ...options },
  };
  const days = getDays(date, events);
  if (days.year !== null) {
    return {
      ...events,
      ...days,
      month: [...initialState.month, days.month],
      year: [...initialState.year, days.year],
    };
  }
  return {
    ...events,
    month: [...initialState.month],
    year: [...initialState.year],
  };
}

export function useCalendar(
  date: Date,
  options?: {
    events?: {
      startDate: Date;
      endDate: Date;
      note: string;
    }[];
  }
) {
  const [state, dispatch] = useReducer(reducer, initialState, () =>
    initialize(date || new Date(), options || {})
  );
  const { days, weeks, month, year, events } = state;

  useEffect(() => {
    return () => dispatch({ type: actionTypes.SET_DATE, date });
  }, [dateDep(date)]);

  return [
    { days, weeks, month, year, events },
    {
      setDate: (date) => dispatch({ date, type: actionTypes.SET_DATE }),
      getNextMonth: () => dispatch({ type: actionTypes.GET_NEXT_MONTH }),
      clear: () => dispatch({ type: actionTypes.CLEAR }),
      getInfiniteNextMonth: () =>
        dispatch({ type: actionTypes.GET_INFINITE_NEXT_MONTH }),
      getPrevMonth: () => dispatch({ type: actionTypes.GET_PREV_MONTH }),
      addEvent: (event) => dispatch({ event, type: actionTypes.ADD_EVENT }),
      removeEvent: (id) => dispatch({ id, type: actionTypes.REMOVE_EVENT }),
    },
  ];
}
