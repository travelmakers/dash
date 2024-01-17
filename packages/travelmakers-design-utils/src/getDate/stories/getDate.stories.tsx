import { getDate, getDay } from "../getDate";

import React from "react";

export default {
  title: "@travelmakers/utils/getDate",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List 컴포넌트의 description을 정합니다.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  console.log(
    getDate("2023-12-29T06:00:00.000000Z", "YYYYMMDD HHMM").format,
    getDate("2023-12-29T06:00:00.000000Z", "YYYYMMDD HHMM").date,
    getDate("2023-12-29T06:00:00.000000Z", "YYYYMMDD HHMM").format
  );
  return (
    <div>
      getDate(YYYY-MM-DD HH:mm):{" "}
      {getDate("2022-12-22 12:00", "YYYY-MM-DD HH:mm:ss").format}
      <br />
      getDate(YYYY-MM-DDTHH:mm:ssZ[Z]):{" "}
      {getDate("2022-12-22T01:37:27.391Z").format}
      <br />
      getDate(YYYY-MM-DDTHH:mm:ssZ[Z]):{" "}
      {getDate("2022-12-22T01:37:27.391Z", "YYYY-MM-DD HH:mm:ss").format}
      <br />
      getDay(YYYY-MM-DDTHH:mm:ssZ[Z]): {getDay("2022-12-22T01:37:27.391Z")}
      <br />
      {getDate("2023-12-29T06:00:00.000000Z", "YYYYMMDD HHMM").format}
      <br />
      today:{" "}
      {getDate("2024-01-12T06:00:00.000000Z", "YYYY-MM-DD||HH:mm").format}
    </div>
  );
};
