import { Meta } from "@storybook/react";
import { GradeBadge } from "../GradeBadge";

export default {
  title: "@travelmakers/core/General/Badge/GradeBadge",
  component: GradeBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["hotel", "minihotel", "residence", "co-living"] },
      defaultValue: "hotel",
      description: "GradeBadge의 type을 지정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    grade: {
      control: { type: "select", options: [1, 2, 3, 4, 5] },
      defaultValue: 5,
      description: "호텔의 등급을 추가합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    hotelType: {
      control: { type: "string" },
      description: "호텔의 종류를 지정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <GradeBadge type={"hotel"} {...props} />;
};
