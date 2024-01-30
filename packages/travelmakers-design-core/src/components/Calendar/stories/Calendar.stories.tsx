import { Meta } from "@storybook/react";
import { Toast, Toaster } from "../../Toast";
import { Calendar } from "../Calendar";
import toast from "react-hot-toast";
import { useState } from "react";

export default {
  title: "@travelmakers/core/General/Calendar",
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
        "2023-11-25",
        "2023-11-26",
        "2023-11-27",
        "2023-11-28",
        "2023-11-29",
        "2023-11-30",
        "2023-12-03",
        "2023-12-10",
        "2023-12-11",
        "2023-12-05",
        "2023-12-15",
        "2023-12-14",
        "2023-12-13",
        "2023-12-12",
        "2023-12-04",
        "2023-12-06",
        "2023-12-08",
        "2023-12-07",
        "2024-1-1",
        "2024-1-2",
        "2024-1-3",
        "2024-1-4",
        "2024-1-5",
        "2024-1-6",
        "2024-1-7",
        "2024-1-12",
        "2024-1-9",
        "2024-1-10",
        "2024-1-11",
        "2024-1-12",
        "2024-1-13",
        "2024-1-14",
        "2024-1-15",
        "2024-1-16",
        "2024-1-17",
        "2024-1-18",
        "2024-1-19",
        "2024-1-20",
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
      defaultValue: ["2023-12-01", "2024-03-01", "2024-02-01"],
      description: "선택 불가능한 일자",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    minNight: {
      defaultValue: 3,
      description: "선택가능한 최소 일자",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    maxNight: {
      defaultValue: 12,
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

export const Default = (props) => {
  const [selected, setSelected] = useState({
    from: undefined,
    to: undefined,
    time: { hour: undefined, minutes: undefined },
  });
  return (
    <div>
      <Calendar
        {...props}
        loclae={"en"}
        topIndicatorPosition="0px"
        selected={selected}
        onChange={setSelected}
        indicatorText={{
          from: "Tour date",
          to: "Tour time",
          descriptionFrom: "Please <br/> select a schedule.",
          descriptionTo: "Please <br/> select a time.",
        }}
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
