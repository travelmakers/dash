import { Meta } from "@storybook/react";
import { TagItem } from "..";

export default {
  title: "@travelmakers-design-v2/core/General/Tag/TagItem",
  component: TagItem,
  argTypes: {
    colorIdx: {
      control: { type: "radio", options: [0, 1, 2] },
      defaultValue: 0,
      description:
        "TagItem을 사용시 color 기준이 되는 값입니다. 만약 Tag에 color가 지정이 되어있다면 해당 color로 통일됩니다.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "label",
      description: "props 각각의 description을 작성합니다.",
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
    <div style={{ display: "inline-block" }}>
      <TagItem {...props} />
    </div>
  );
};
