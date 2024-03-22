import { Meta } from "@storybook/react";
import { Toast, Toaster } from "../../Toast";
import { CalendarSecond as Calendar } from "../Calendar";
import toast from "react-hot-toast";
import { useState } from "react";

export default {
  title: "@travelmakers/core/General/CalendarSecond",
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
        "2024-3-25",
        "2024-3-26",
        "2024-3-27",
        "2024-3-28",
        "2024-3-29",
        "2024-3-30",
        "2024-3-03",
        "2024-3-10",
        "2024-3-11",
        "2024-3-05",
        "2024-3-15",
        "2024-3-14",
        "2024-3-13",
        "2024-3-12",
        "2024-3-04",
        "2024-3-06",
        "2024-3-08",
        "2024-3-07",
        "2024-4-1",
        "2024-4-2",
        "2024-4-3",
        "2024-4-4",
        "2024-4-5",
        "2024-4-6",
        "2024-4-7",
        "2024-4-12",
        "2024-4-9",
        "2024-4-10",
        "2024-4-11",
        "2024-4-12",
        "2024-4-13",
        "2024-4-14",
        "2024-4-15",
        "2024-4-16",
        "2024-4-17",
        "2024-4-18",
        "2024-4-19",
        "2024-4-20",
      ],
      description: "선택 가능한 일자",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    disabledDays: {
      defaultValue: ["2023-6-18", "2023-6-19", "2023-6-20"],
      description: "선택 불가능한 일자",
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
    displayMonth: {
      defaultValue: 3,
      description: "표출할 개월수에 대해서 확인한다.",
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

const moveInDates = [
  "2024-3-25",
  "2024-3-26",
  "2024-3-27",
  "2024-3-28",
  "2024-3-29",
  "2024-3-30",
  "2024-3-03",
  "2024-3-10",
  "2024-3-11",
  "2024-3-05",
  "2024-3-15",
  "2024-3-14",
  "2024-3-13",
  "2024-3-12",
  "2024-3-04",
  "2024-3-06",
  "2024-3-08",
  "2024-3-07",
  "2024-4-1",
  "2024-4-2",
  "2024-4-3",
  "2024-4-4",
  "2024-4-5",
  "2024-4-6",
  "2024-4-7",
  "2024-4-12",
  "2024-4-9",
  "2024-4-10",
  "2024-4-11",
  "2024-4-12",
  "2024-4-13",
  "2024-4-14",
  "2024-4-15",
  "2024-4-16",
  "2024-4-17",
  "2024-4-18",
  "2024-4-19",
  "2024-4-20",
];

const tourDates = [
  "2023-9-24",
  "2023-9-25",
  "2023-9-26",
  "2023-9-27",
  "2023-9-28",
  "2023-9-29",
  "2023-9-30",
];

export const Default = (props) => {
  const [selected, setSelected] = useState({
    from: undefined,
    to: undefined,
    time: { hour: undefined, minutes: undefined },
  });
  const [type, setType] = useState("move-in");

  return (
    <div>
      <Calendar
        {...props}
        locale={"en"}
        type={type}
        selectableDates={type === "tour" ? tourDates : moveInDates}
        indicatorText={{
          from: "Tour date",
          to: "Tour time",
          descriptionFrom: "Please <br/> select a schedule.",
          descriptionTo: "Please <br/> select a time.",
        }}
        topIndicatorPosition="0px"
        selected={selected}
        onChange={setSelected}
        notAllowedMessage={undefined}
      >
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
    </div>
  );
};

export const ToastTest = (props) => {
  return (
    <>
      <Toaster />
      <Calendar
        {...props}
        topIndicatorPosition="0px"
        notAllowedMessage={() => toast(<Toast text="허용할 수 없는" />)}
      >
        <Calendar.OptionBox
          title={"시간 선택하기"}
          buttonTitle={"예약하기"}
          warningExpandMessageToast={() =>
            toast(<Toast text="warningExpandMessageToast" />)
          }
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
