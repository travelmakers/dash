import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";
import { inputDate } from "./getDate.type";
dayjs.extend(utc);
dayjs.extend(timezone);

function getDateValuate(date?: inputDate) {
  if (!date) {
    const curr = dayjs().tz("Asia/Seoul");
    return curr;
  }

  const kr_curr = dayjs(`${date}+0900`).tz("Asia/Seoul");
  if (!kr_curr.isValid()) {
    const curr = dayjs(date).tz("Asia/Seoul");
    return curr;
  } else {
    return kr_curr;
  }
}

/**
 * Date객체를 YYYY/MM/DD 형태로 표출
 * @param date 날짜객체
 * @param separators 구분좌(/)
 * @returns format: string, date: Date, dayjs: dayjs.Dayjs
 */
export function getDate(date?: inputDate, format?: string) {
  const d = getDateValuate(date);
  const template = format ?? "YYYY/MM/DD";

  return {
    format: d.format(template),
    date: d.toDate(),
    dayjs: d,
  };
}

/**
 * Date객체를 `월요일` 형태로 표출
 * @param date 날짜객체
 * @param locale 국가언어(ex) ko)
 * @returns 요일
 */
export function getDay(date?: inputDate, locale: string = "ko") {
  const d = getDateValuate(date);
  const day = d.locale(locale).format("ddd");
  return `${day}요일`;
}
