import { Meta } from "@storybook/react";
import { Calendar } from "../Calendar";

export default {
  title: "@travelmakers-design-v2/core/General/Calendar",
  component: Calendar,
  argTypes: {
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
    notAllowedDays: {
      defaultValue: [
        new Date(2023, 4, 21),
        new Date(2023, 4, 22),
        new Date(2023, 4, 23),
      ],
      description: "soldOut 되어서 선택이 불가능한 일자",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
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
    visibleMonth: {
      defaultValue: 3,
      description: "한번에 보여줄 개월 수",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    visibleDay: {
      defaultValue: 30,
      description: "선택할 수 있는 날짜 수",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
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
  return <Calendar {...props} />;
};
