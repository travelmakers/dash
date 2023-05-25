import { Meta } from "@storybook/react";
import { HotelTitleCard } from "../HotelTitleCard";

export default {
  title: "@travelmakers/core/General/Card/HotelTitleCard",
  component: HotelTitleCard,
  argTypes: {
    type: {
      defaultValue: "grade",
      description: "Hotel 타입을 정합니다.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelTitleCard 컴포넌트의 호텔타입이 default일 경우 몇성호텔인지를 표시합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    groupTags: {
      defaultValue: ["레이블", "레이블", "레이블"],
      description:
        "HotelTitleCard 컴포넌트의 이미지내 상단 레이블을 표시합니다.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    tags: {
      defaultValue: ["레이블", "레이블", "레이블", "레이블"],
      description:
        "HotelTitleCard 컴포넌트의 이미지내 하단 레이블을 표시합니다.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    isCoupon: {
      defaultValue: true,
      description: "HotelTitleCard 컴포넌트의 쿠폰 표시여부를 결정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: 1,
        priceText: 10000,
        priceStartText: "1박 100,000원부터",
        isCoupon: true,
      },
      description: "HotelTitleCard 컴포넌트의 가격을 표시합니다.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <HotelTitleCard {...props} />
      <HotelTitleCard {...props} isPrice={false} />
    </div>
  );
};
