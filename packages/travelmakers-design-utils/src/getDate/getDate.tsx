import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";
import { inputDate } from "./getDate.type";

dayjs.extend(utc);
dayjs.extend(timezone);

function getDateValuate(date?: inputDate) {
  if (!date) {
    return dayjs().tz("Asia/Seoul");
  }

  // 입력된 날짜를 UTC로 파싱하고, 한국 시간대로 변환하지만 시간은 원래 값으로 유지합니다
  const kr_curr = dayjs.utc(date).tz("Asia/Seoul", true);
  // 변환된 날짜가 유효한지 확인합니다
  if (!kr_curr.isValid()) {
    // 유효하지 않으면 현재 시간을 한국 시간대로 반환합니다
    return dayjs(date);
  }

  // 유효한 경우 변환된 날짜를 반환합니다
  return kr_curr;
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
  const utcDate = new Date(d.utc(true).format("YYYY-MM-DDTHH:mm:ss[Z]"));

  return {
    format: d.format(template),
    date: utcDate,
    dayjs: d,
  };
}

export function getInnerDate(date?: inputDate, format?: string) {
  function getInnerDateValuate(date?: inputDate) {
    if (!date) {
      const curr = dayjs();
      return curr;
    }

    const kr_curr = dayjs(date);
    // const kr_curr = dayjs(`${date}+0900`).tz("Asia/Seoul");
    if (!kr_curr.isValid()) {
      const curr = dayjs(date);
      return curr;
    } else {
      return kr_curr;
    }
  }

  const d = getInnerDateValuate(date);
  const template = format ?? "YYYY/MM/DD";
  const utcDate = new Date(d.utc().format("YYYY-MM-DDTHH:mm:ss[Z]"));

  return {
    format: d.format(template),
    date: utcDate,
    // date: dayjs.utc(d).tz("Asia/Seoul", true).date(),
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
