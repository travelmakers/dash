import { Meta } from "@storybook/react";
import { Timer } from "../Timer";

export default {
  title: "@travelmakers-design-v2/core/General/Timer",
  component: Timer,
  argTypes: {
    type: {
      control: { type: "radio", options: ["navy", "white"], default: "navy" },
      description: "Timer의 색상 타입",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: { type: "radio", options: ["small", "large"], default: "small" },
      defaultValue: "small",
      description: "Timer의 사이즈",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    text: {
      control: { type: "text" },
      defaultValue: "타임세일 워딩",
      description: "타임 세일에 대한 워딩",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    time: {
      control: { type: "text" },
      description:
        "타임 세일 기간 ex) Thu Apr 06 2023 10:52:19 GMT+0900 (한국 표준시)",
      table: {
        type: {
          summary: "dayjs.ConfigType",
        },
      },
    },
    // https://developer.mozilla.org/ko/docs/Web/HTML/Element/time
    dateTime: {
      control: { type: "text" },
      defaultValue: "2011-11-18",
      description: "검색 엔진에서 필요한 날짜 데이터 입니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const { time, type, size, text, dateTime } = props;
  const now = new Date();

  return (
    <div style={{ backgroundColor: props.type === "white" && "gray" }}>
      <Timer
        time={time || now}
        type={type}
        size={size}
        text={text}
        dateTime={dateTime}
      />
    </div>
  );
};
