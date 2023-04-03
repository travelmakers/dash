import { Meta } from "@storybook/react";
import { Tag } from "../Tag/Tag";

export default {
  title: "@travelmakers-design-v2/core/General/Tag/Tag",
  component: Tag,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fill", "line"],
        default: "fill",
      },
      description: "TagItem의 타입을 정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    color: {
      control: {
        type: "radio",
        options: ["green", "blue", "purple", "gray"],
        default: "green",
      },
      description: "TagItem의 색상을 정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
        default: "small",
      },
      description: "TagItem의 크기를 정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    gap: { type: "number" },
    roundness: {
      control: {
        type: "radio",
        options: ["default", "half", "full"],
        default: "default",
      },
      description: "TagItem의 모서리의 라운드 크기를 정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <Tag type="fill" color="blue" {...props}>
      <Tag.Item label="레이블" />
      <Tag.Item label="레이블" />
      <Tag.Item label="레이블" />
      <Tag.Item label="레이블" />
    </Tag>
  );
};
