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
  isEqual,
  isSameDay,
  isSameMonth,
  isWeekend,
  lastDayOfMonth,
  startOfWeek,
  toDate,
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

function getWeeks(date, currentDate, { options, events, eventsIndex }) {
  const firstDay = toDate(new Date(currentDate));
  const lastDay = startOfWeek(lastDayOfMonth(date));
  const diff = differenceInCalendarWeeks(lastDay, firstDay) + 1;
  const weeks = Array.from({ length: diff }).map((_, weekIndex) => {
    const days = Array.from({ length: options.numOfDays }).map(
      (_, dayIndex) => {
        const day = transformDate(date, currentDate, options.locale);
        const dayEvents = getEventsForDate(currentDate, events, eventsIndex);
        const month = format(date, "LLLL", { locale: options.locale });
        const year = getYear(date);
        currentDate = addDays(currentDate, 1);
        return {
          year,
          month,
          dayIndex,
          weekIndex,
          events: dayEvents,
          ...day,
        };
      }
    );
    return options.rtl ? days.reverse() : days;
  });
  return weeks;
}

/**
 * ANCHOR: 해당 월의 일자를 생성한다.
 * @param date
 * @returns
 */
function getDays(date, { options, events, eventsIndex }) {
  let currentDate = startOfWeek(new Date(getYear(date), getMonth(date)));
  const weeks = getWeeks(date, currentDate, { options, events, eventsIndex });
  let days: string[];
  if (isEqual(startOfWeek(currentDate), endOfWeek(currentDate))) {
    days = eachDayOfInterval({
      start: startOfWeek(currentDate),
      end: endOfWeek(currentDate),
    }).map((day) => format(day, "EEE", { locale: options.locale }));
  } else {
    days = [startOfWeek(currentDate)].map((day) =>
      format(day, "EEE", { locale: options.locale })
    );
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
