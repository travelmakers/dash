import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
import { getTimeLineFunc, getTimeLineProps } from "@travelmakers/utils";
import React from "react";
import { TimeLineBanner } from "../TimeLineBanner";

export default {
  title: "@travelmakers/core/General/Card/TimeLineBanner",
  component: TimeLineBanner,
  argTypes: {
    status: {
      defaultValue: "default",
      description: "해당 호텔에 대한 구매 상태를 의미합니다.",
      options: ["default", "alert"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "안녕하세요, 홍길동님",
      description: "Title 텍스트를 지정한다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    message: {
      defaultValue:
        "여행 같은 일상이 필요하지 않으세요?여행 같은 일상이 필요하지 않으세요?여행 같은 일상이 필요하지 않으세요?여행같은 일상이 필요하지 않으세요?여행같은 일상이 필요하지 않으세요?",
      description: "Message 텍스트를 지정한다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    label: {
      defaultValue: "전체 호텔 보러가기",
      description: "Label 텍스트를 지정한다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    arrowHidden: {
      defaultValue: false,
      description: "Label 우측에 표시되는 arrow 화살표 hidden 여부를 결정한다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

type ReservationState =
  | "default"
  | "tour_confirm_before"
  | "tour_confirm"
  | "tour_done"
  | "reservation_purchase_before"
  | "reservation_purchase_done"
  | "checkin_before"
  | "day_n"
  | "extend_purchase_before"
  | "extend_purchase_done"
  | "extend_checkin_before"
  | "reservation_change_process"
  | "checkout_before"
  | "checkout_before_n"
  | "checkout_done"
  | "tour_cancel"
  | "reservation_cancel";

const statueBanner = (state: ReservationState, locale: string) => {
  // @ts-ignore
  const timeLineFunc = getTimeLineFunc(state, locale);
  const timeLineProps = getTimeLineProps(state, {
    first: {
      userName: "홍길동",
      hotelName:
        locale === "ko"
          ? "서울드래곤시티 - 이비스 스타일 앰배서더 서울 용산"
          : "SEOUL DRAGON CITY - ibis Styles Ambassador Seoul Yongsan",
    },
    second: {
      userName: "홍길동",
      hotelName:
        locale === "ko"
          ? "서울드래곤시티 - 이비스 스타일 앰배서더 서울 용산"
          : "SEOUL DRAGON CITY - ibis Styles Ambassador Seoul Yongsan",
      expectedDate: "2024-02-09T08:11:52.000000Z",
      startDate: "2024-02-09T08:11:52.000000Z",
      endDate: "2024-02-09T08:11:52.000000Z",
      dDay: 4,
    },
    buttonText: {
      expectedDate: "2024-02-09T08:11:52.000000Z",
      endDate: "2024-02-09T08:11:52.000000Z",
    },
  });
  const status = timeLineFunc.color;
  const title = timeLineFunc.firstLineText(timeLineProps.first);
  // @ts-ignore
  const message = timeLineFunc.secondLineText(timeLineProps.second);
  // @ts-ignore
  const label = timeLineFunc.buttonText(timeLineProps.buttonText);
  const arrowHidden = !timeLineFunc.link("/").arrow;
  return { status, title, message, label, arrowHidden };
};

export const Default = (props) => {
  const status: ReservationState[] = [
    "default",
    "tour_confirm_before",
    "tour_confirm",
    "tour_done",
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
  ];

  return (
    <>
      {status.map((state) => {
        return (
          <div style={{ padding: 24, width: 328 }}>
            {state}: <TimeLineBanner {...statueBanner(state, "ko")} />
          </div>
        );
      })}
    </>
  );
};

export const English = (props) => {
  const status: ReservationState[] = [
    "default",
    "tour_confirm_before",
    "tour_confirm",
    "tour_done",
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
  ];

  return (
    <>
      {status.map((state) => {
        return (
          <div style={{ padding: 24, width: 328 }}>
            {state}: <TimeLineBanner {...statueBanner(state, "en")} />
          </div>
        );
      })}
    </>
  );
};

export const Skeleton = (props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner status={"default"} arrowHidden={true} />
      </div>
    </>
  );
};
