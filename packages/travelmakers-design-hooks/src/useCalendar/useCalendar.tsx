import { useEffect, useReducer } from "react";
import * as actionTypes from "./useCalendar.type";

const initialState = {
  startDate: null,
  month: null,
  days: [],
  weeks: [],
  events: [],
  eventsIndex: {},
  options: {
    numOfWeeks: 6,
    numOfDays: 7,
    rtl: false,
    locale: undefined,
  },
};
// https://github.com/gregnb/react-use-calendar/blob/master/src/date.js
function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_OPTIONS:
      return {
        ...state,
        ...createEvents(action.options, state),
        options: { ...state.options, ...action.options },
      };
    case actionTypes.SET_DATE:
      return { ...state, ...getDays(action.date, state) };
    case actionTypes.GET_NEXT_MONTH:
      return { ...state, ...getDays(addDays(state.startDate, 30), state) };
    case actionTypes.GET_PREV_MONTH:
      return { ...state, ...getDays(addDays(state.startDate, -30), state) };
    case actionTypes.ADD_EVENT:
      return { ...state, ...addEvent(action.event, state) };
    case actionTypes.REMOVE_EVENT:
      return { ...state, ...removeEvent(action.id, state) };
    default:
      return state;
  }
}

export function useCalendar() {
  const [state, dispatch] = useReducer(reducer, initialState, () =>
    initialize(date || new Date(), options)
  );
}
