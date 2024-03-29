import React from "react";

import { getTimeLineFunc } from "../getTimeLineFunc";

export default {
  title: "@travelmakers/utils/getTimeLineFunc",
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
  return (
    <div>
      firstLineText: {getTimeLineFunc("default", "ko").firstLineText("홍길동")}
      <br />
      secondLineText(default):
      {getTimeLineFunc("default", "ko").secondLineText()}
      <br />
      secondLineText(tour_confirm_before):
      {getTimeLineFunc("reservation_purchase_before", "ko").secondLineText(
        "서울드래곤시티"
      )}
      <br />
      secondLineText(tour_confirm):
      {getTimeLineFunc("tour_confirm", "ko").secondLineText(
        "2022-09-28T01:26:38.000000Z"
      )}
      <br />
      buttonText: {getTimeLineFunc("default", "ko").buttonText()}
      <br />
      ---- <br />
      getTimeLineFunc(`state`,"ko")
    </div>
  );
};
