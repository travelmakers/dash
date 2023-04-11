import { Meta } from "@storybook/react";
import { PriceCard } from "../PriceCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/PriceCard",
  component: PriceCard,
  argTypes: {
    status: {
      defaultValue: "active",
      description: "Hotel 타입을 정합니다.",
      options: ["active", "disabled"],
      control: { type: "inline-radio" },
    },
    name: {
      defaultValue: "name",
      description: "PriceCard 컴포넌트의 상품명을 입력합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "description",
      description: "PriceCard 컴포넌트의 자세한 설명을 입력합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    tag: {
      defaultValue: ["레이블", "레이블", "레이블"],
      description: "PriceCard 컴포넌트의 레이블을 표시합니다.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <PriceCard {...props} />;
};
