import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
dayjs.extend(timezone);

function pad(n) {
  return n < 10 ? "0" + n : n;
}

export function getDayjs() {
  return dayjs;
}

/**
 * 날짜 문자열을 한국(UTC +9시간) Date객체로 표출
 * @param date
 * @returns
 */
export function getKorDate(date?: string) {
  const d = date ? new Date(date) : new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + KR_TIME_DIFF);
  return kr_curr;
}

export function getKorMoment(date?: string) {
  if (!date) {
    const curr = dayjs().tz("Asia/Seoul");
    return curr;
  }
  const kr_curr = dayjs(`${date}+0900`).tz("Asia/Seoul");
  if (!kr_curr.isValid()) {
    const curr = dayjs(`${date}`).tz("Asia/Seoul");
    return curr;
  }
  return kr_curr;
}
/**
 * Date객체를 YYYY/MM/DD 형태로 표출
 * @param date 날짜객체
 * @param separators 구분좌(/)
 * @returns YYYY/MM/DD
 */
export function getDate(date?: string, separators?: string) {
  const d = getKorMoment(date);
  const separator = separators ?? "/";

  return d.year() + separator + (d.month() + 1) + separator + d.date();
}

/**
 * Date객체를 YYYY/MM/DD 형태로 표출
 * @param date 날짜객체
 * @param separators 구분좌(/)
 * @returns YYYY/MM/DD HH:MM
 */
export function getFullDate(date?: string, separators?: string) {
  const d = getKorMoment(date);
  const separator = separators ?? "/";

  return (
    d.year() +
    separator +
    (d.month() + 1) +
    separator +
    d.date() +
    " " +
    d.hour() +
    ":" +
    pad(d.minute())
  );
}

/**
 * Date객체를 YYYY/MM/DD 형태로 표출
 * @param date 날짜객체
 * @param separators 구분좌(:)
 * @returns HH:MM
 */
export function getDateTime(date?: string, separators?: string) {
  const d = getKorMoment(date);
  const separator = separators ?? ":";

  return pad(d.hour()) + separator + pad(d.minute());
}

/**
 * Date객체를 `월요일` 형태로 표출
 * @param date 날짜객체
 * @returns 요일
 */
export function getDay(date?: string) {
  const d = getKorMoment(date);
  const day = d.day(); // 요일
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
  return WEEKDAY[day] + "요일";
}
