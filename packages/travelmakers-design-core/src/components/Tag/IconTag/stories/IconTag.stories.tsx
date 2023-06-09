import { Meta } from "@storybook/react";
import { IconTag } from "../IconTag";

export default {
  title: "@travelmakers/core/General/Tag/IconTag",
  component: IconTag,
  argTypes: {
    type: {
      control: { type: "radio", options: ["fill", "line"] },
      defaultValue: "fill",
      description: "아이콘 태그의 유형을 선택합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "쿠폰 적용가",
      description: "쿠폰의 적용될 라벨을 작성합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <IconTag type={"fill"} {...props} />;
};
