import { getRemainingTime } from "@travelmakers-design-v2/utils";
import dayjs from "dayjs";
import { useLayoutEffect, useState } from "react";

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
  }, []);

  return { remainingTime };
};
