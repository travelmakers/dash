import dayjs from "dayjs";
import { useRemainingTimer } from "../useRemainingTimer";

export default {
  title: "@travelmakers-design-v2/hooks/useRemainingTimer",
};

export const Default = () => {
  const { remainingTime } = useRemainingTimer(dayjs());

  return <div>{remainingTime}</div>;
};
