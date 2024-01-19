import {
  addDays,
  differenceInCalendarWeeks,
  eachDayOfInterval,
  endOfWeek,
  format,
  getDate,
  getDayOfYear,
  getMonth,
  getYear,
  isSameDay,
  isSameMonth,
  isValid,
  isWeekend,
  lastDayOfMonth,
  startOfWeek,
} from "date-fns";
import {
  CalendarEvent,
  CalendarEventIndex,
  CalendarNewEvents,
} from "./useCalendar.type";

function omitKey(data, key) {
  const { [key]: omit, ...other } = data;
  return other;
}

function transformDate(startDate, date, locale) {
  return {
    date,
    format: format(date, "yyyy-MM-dd"),
    dayOfWeek: format(date, "EEEE", { locale }),
    dayOfYear: getDayOfYear(date),
    dayOfMonth: getDate(date),
    isToday: isSameDay(new Date(), date),
    isSameMonth: isSameMonth(date, startDate),
    isWeekend: isWeekend(date),
  };
}

function getDateKey(date) {
  return format(date, "M-dd-yy");
}

function getEventsForDate(date, events, eventsIndex) {
  const dateKey = getDateKey(date);
  const dateEvents = eventsIndex[dateKey];

  return dateEvents
    ? dateEvents.map((id) => ({
        id,
        ...omitKey(events[id], "dates"),
        isMultiDayEvent: events[id].dates.length > 1,
      }))
    : [];
}

function addEvent(newEvent, prevEvents) {
  const addedEvent = createEvents({ events: [newEvent] }, prevEvents);
  return {
    ...addedEvent,
    ...getDays(prevEvents.startDate, { ...prevEvents, ...addedEvent }),
  };
}

function removeEvent(id, { startDate, events, options }) {
  const cleanEvents = [...events];
  cleanEvents.splice(id, 1);

  const newEvents = createEvents(
    { events: cleanEvents },
    { events: [], eventsIndex: {} }
  );
  const days = getDays(startDate, { options, ...newEvents });

  return {
    ...newEvents,
    ...days,
  };
}

function createEvents({ events }: { events?: CalendarEvent[] }, prevEvents) {
  if (!events) return;

  let newEvents: CalendarNewEvents[] = [...prevEvents.events];
  let newEventsIndex: CalendarEventIndex = {
    ...prevEvents.eventsIndex,
  };

  events.forEach((event) => {
    let dates: string[] = [];

    eachDayOfInterval({ start: event.startDate, end: event.endDate }).forEach(
      (day) => {
        const dateKey = getDateKey(day);
        const index = newEvents.length;
        if (!events[dateKey]) newEventsIndex[dateKey] = [];
        newEventsIndex[dateKey].push(index);
        dates.push(dateKey);
      }
    );

    newEvents.push({ ...event, dates });
  });

  return { events: newEvents, eventsIndex: newEventsIndex };
}

/**
 * ANCHOR: 선택 불가능한 날짜(disabledDays) 사이에 대해서 체크
 * @param day
 * @param selectableDates
 * @param disabledDays
 * @returns
 */
const isDisabledDay = (
  day,
  selectableDates: string[],
  disabledDays: string[]
) => {
  const isDisable = disabledDays.some(
    (disabledDay) =>
      disabledDay === day.format || disabledDay === format(day.date, "yyyy-M-d")
  );
  const isSelectable = !selectableDates.some(
    (selectableDate) =>
      selectableDate === day.format ||
      selectableDate === format(day.date, "yyyy-M-d")
  );
  return isDisable || isSelectable;
};

function getWeeks(
  date,
  currentDate,
  { options, events, eventsIndex },
  selectableDates?: string[],
  disabledDays?: string[]
) {
  const firstDay = currentDate;
  const lastDay = startOfWeek(lastDayOfMonth(date));
  const diff = differenceInCalendarWeeks(lastDay, firstDay) + 1;
  return Array.from({ length: diff }).map((_, weekIndex) => {
    const days = Array.from({ length: options.numOfDays }).map(
      (_, dayIndex) => {
        const day = transformDate(date, currentDate, options.locale);
        const dayEvents = getEventsForDate(currentDate, events, eventsIndex);
        const month = format(date, "LLLL", { locale: options.locale });
        const year = getYear(date);
        currentDate = addDays(currentDate, 1);
        const disabled = isDisabledDay(
          day,
          selectableDates ?? [],
          disabledDays ?? []
        );
        return {
          year,
          month,
          dayIndex,
          weekIndex,
          events: dayEvents,
          disabled,
          format: format(currentDate, "yyyy-mm-dd"),
          ...day,
        };
      }
    );
    return options.rtl ? days.reverse() : days;
  });
}

/**
 * ANCHOR: 해당 월의 일자를 생성한다.
 * @param date
 * @returns
 */
function getDays(
  date,
  { options, events, eventsIndex },
  selectableDates?: string[],
  disabledDays?: string[]
) {
  // let currentDate = startOfWeek(new Date(date).date);
  let currentDate = startOfWeek(new Date(getYear(date), getMonth(date)));
  const weeks = getWeeks(
    date,
    currentDate,
    { options, events, eventsIndex },
    selectableDates,
    disabledDays
  );
  let days: string[];
  if (isValid(startOfWeek(currentDate)) && isValid(endOfWeek(currentDate))) {
    days = eachDayOfInterval({
      start: startOfWeek(currentDate),
      end: endOfWeek(currentDate),
    }).map((day) => format(day, "EEE", { locale: options.locale }));
  } else {
    return {
      startDate: null,
      month: null,
      year: null,
      weeks,
      days,
    };
  }

  return {
    startDate: date,
    month: format(date, "LLLL", { locale: options.locale }),
    year: getYear(date),
    weeks,
    days,
  };
}

export { getDays, addEvent, removeEvent, createEvents };
