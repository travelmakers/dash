import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

/**
 * 현재 시간부터 목표 시간까지의 남은 시간을 구합니다.
 *
 * ex)
 *      now: "Sat Feb 25 2023 02:27:29 GMT+0900"
 *      targetDate: "2023-02-28 23:59:00"
 *      format: "DD일 HH:mm:ss"
 *
 *      return "05일 06:31:30"
 */
export const getRemainingTime = (
  targetDate: dayjs.ConfigType,
  format = "DD일 HH:mm:ss"
) => {
  const target = dayjs(targetDate);
  const now = dayjs();
  const diff = target.diff(now);
  const isReachedTime = now.isSame(target) || diff <= 0;
  if (isReachedTime) return "00:00:00";

  const days = dayjs.duration(diff).days();

  // NOTE: 당일이라면 일자는 표시x
  if (days === 0) {
    return dayjs(diff).format("HH:mm:ss");
  }

  return dayjs(diff).format(format);
};
