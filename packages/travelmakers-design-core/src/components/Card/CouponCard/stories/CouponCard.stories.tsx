import { Meta } from "@storybook/react";
import { CouponCard } from "../CouponCard";

export default {
  title: "@travelmakers/core/General/Card/CouponCard",
  component: CouponCard,
  argTypes: {
    type: {
      defaultValue: "week",
      description: "CouponCard의 Type을 설정합니다.",
      options: ["week", "month", "all"],
      control: { type: "inline-radio" },
    },
    state: {
      defaultValue: "default",
      description: "CouponCard의 상태를 설정합니다.",
      options: ["default", "applied", "checked"],
      control: { type: "inline-radio" },
    },
    day: {
      defaultValue: 1,
      description: "CouponCard의 day를 설정합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    title: {
      defaultValue: "00%",
      description: "CouponCard의 타이틀을 설정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    subTitle: {
      defaultValue: "호텔에삶 특별 혜택",
      description: "CouponCard의 서브 타이틀을 설정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    item: {
      defaultValue: "적용 상품",
      description: "CouponCard의 적용상품 설정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    remainingQuantity: {
      defaultValue: 5,
      description: "CouponCard의 잔여수량을 설정합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    content: {
      defaultValue:
        "*쿠폰 사용 안내 문구\n *쿠폰 사용 안내 문구 안내 문구\n *쿠폰사용안내 문구 안내 문구",
      description: "CouponCard의 내용을 설정합니다.",
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
  return <CouponCard {...props} />;
};
