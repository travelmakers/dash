import { Meta } from "@storybook/react";
import { OptionCard } from "../OptionCard";

export default {
  title: "@travelmakers/core/General/Card/OptionCard",
  component: OptionCard,
  argTypes: {
    labels: {
      defaultValue: ["레이블", "레이블", "레이블"],
      description: "OptionCard 컴포넌트의 상단 레이블을 표시합니다.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    headTitle: {
      defaultValue: "Room Type",
      description: "OptionCard 컴포넌트의 상단 Title Name을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    footerTitle: {
      defaultValue: "Benefit",
      description: "OptionCard 컴포넌트의 하단 Title Name을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    optionName: {
      defaultValue: "옵션 설명",
      description: "OptionCard 컴포넌트의 optionName을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isDuration: {
      defaultValue: true,
      description: "OptionCard 컴포넌트의 Duration 표시여부를 판단합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    minNight: {
      defaultValue: 1,
      description: "OptionCard 컴포넌트의 최소 -박(night)을 표사합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    maxNight: {
      defaultValue: 2,
      description: "OptionCard 컴포넌트의 최대 -박(night)을 표사합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    roomType: {
      defaultValue: "룸 타입 / 룸 타입",
      description: "OptionCard 컴포넌트의 roomType을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    benefitList: {
      defaultValue: [
        {
          content: "혜택 설명을 입력하세요",
          only: false,
          order: 1,
        },
        {
          content: "혜택 설명을 입력하세요",
          only: false,
          order: 2,
        },
        {
          content: "혜택 설명을 입력하세요",
          only: false,
          order: 3,
        },
      ],
      description: "OptionCard 컴포넌트의 benefitContent을 표사합니다.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        priceText: 10000,
        priceStartText: "",
        isCoupon: true,
      },
      description: "OptionCard 컴포넌트의 가격을 표시합니다.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
    buttonName: {
      defaultValue: "예약하기",
      description: "OptionCard 컴포넌트의 buttonName을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    href: {
      defaultValue: "href",
      description: "",
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
    <div style={{ margin: 40, display: "flex" }}>
      <OptionCard {...props} />
    </div>
  );
};

export const Disabled = (props) => {
  return (
    <div style={{ margin: 40, display: "flex" }}>
      <OptionCard {...props} href="dsfsdfs" buttonProps={{ disabled: true }} />
    </div>
  );
};
