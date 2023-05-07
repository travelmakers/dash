import { Meta } from "@storybook/react";
import { Toaster } from "../../Toast";
import { Calendar } from "../Calendar";

export default {
  title: "@travelmakers-design-v2/core/General/Calendar",
  component: Calendar,
  argTypes: {
    type: {
      defaultValue: "move-in",
      description: "캘린더의 타입",
      options: ["move-in", "tour"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    selectableDates: {
      defaultValue: [
        new Date(2023, 3, 25),
        new Date(2023, 3, 26),
        new Date(2023, 3, 27),
        new Date(2023, 3, 28),
        new Date(2023, 3, 29),
        new Date(2023, 3, 30),
        new Date(2023, 4, 1),
        new Date(2023, 4, 2),
        new Date(2023, 4, 3),
        new Date(2023, 4, 4),
        new Date(2023, 4, 5),
        new Date(2023, 4, 6),
        new Date(2023, 4, 7),
        new Date(2023, 4, 8),
        new Date(2023, 4, 9),
        new Date(2023, 4, 10),
        new Date(2023, 4, 11),
        new Date(2023, 4, 12),
        new Date(2023, 4, 13),
        new Date(2023, 4, 14),
        new Date(2023, 4, 15),
        new Date(2023, 4, 16),
        new Date(2023, 4, 17),
        new Date(2023, 4, 18),
        new Date(2023, 4, 19),
        new Date(2023, 4, 20),
      ],
      description: "선택 가능한 일자",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    minNight: {
      defaultValue: 5,
      description: "선택가능한 최소 일자",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    maxNight: {
      defaultValue: 59,
      description: "선택가능한 최대 일자",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    selected: {
      defaultValue: {
        from: {
          date: new Date(2023, 3, 25),
          dayIndex: 2,
          dayOfMonth: 25,
          dayOfWeek: "화요일",
          dayOfYear: 115,
          events: [],
          isSameMonth: true,
          isToday: false,
          isWeekend: false,
          month: "4월",
          weekIndex: 4,
          year: 2023,
        },
        to: {
          date: new Date(2023, 4, 2),
          dayIndex: 2,
          dayOfMonth: 2,
          dayOfWeek: "화요일",
          dayOfYear: 122,
          events: [],
          isSameMonth: true,
          isToday: false,
          isWeekend: false,
          month: "5월",
          weekIndex: 0,
          year: 2023,
        },
      },
      description: "initial Date",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
    disabledDays: {
      defaultValue: [
        new Date(2023, 5, 21),
        new Date(2023, 5, 22),
        new Date(2023, 5, 23),
      ],
      description: "선택 불가능한 일자",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    notAllowedMessage: {
      defaultValue:
        "해당 일자는 예약이 불가합니다. \n다른 일자를 선택해주세요.",
      description: "허용하지 않는 날짜를 클릭하였을 경우 출력할 메시지",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <Toaster />
      <Calendar {...props}>
        <Calendar.OptionBox
          title={"시간 선택하기"}
          buttonTitle={"예약하기"}
          onClick={() => {
            console.log("OptionBox-log");
          }}
        >
          1234
        </Calendar.OptionBox>
      </Calendar>
    </>
  );
};
