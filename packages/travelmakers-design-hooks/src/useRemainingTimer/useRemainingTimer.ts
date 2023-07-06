import dayjs from "dayjs";
import { useLayoutEffect, useState } from "react";
import { getRemainingTime } from "../utils/getRemainingTime";

export const useRemainingTimer = (
  targetDate: dayjs.ConfigType,
  format?: string,
  delay?: 1000
) => {
  const [remainingTime, setRemainingTime] = useState("");

  useLayoutEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    timer = setInterval(
      () => setRemainingTime(getRemainingTime(targetDate, format)),
      delay
    );

    return () => {
      timer && clearInterval(timer);
    };
  }, [targetDate]);

  return { remainingTime };
};
