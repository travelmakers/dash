import dayjs from "dayjs";

function pad(n) {
  return n < 10 ? "0" + n : n;
}
/**
 * Date객체를 MM월DD일 형태로 표출
 * @param date 날짜객체
 * @param isHour 시분(HH:SS)을 표시해야 하는지 여부
 * @returns MM월DD일 HH:SS
 */
export function getTimeStamp(date: dayjs.Dayjs, isHour?: boolean) {
  const d = date;

  return isHour
    ? d.month() +
        1 +
        "월 " +
        d.date() +
        "일 " +
        d.hour() +
        ":" +
        pad(d.minute())
    : d.month() + 1 + "월 " + d.date() + "일 ";
}

/**
 * Date객체를 MM월DD일 형태로 표출
 * @param date 날짜객체
 * @returns MM월DD일 HH시
 */
export function getTimeStampCheckIn(date: dayjs.Dayjs) {
  const d = date;

  return d.month() + 1 + "월 " + d.date() + "일 " + d.hour() + "시";
}
