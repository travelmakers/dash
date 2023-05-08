import { Meta } from "@storybook/react";
import { Toggle } from "../Toggle";

export default {
  title: "@travelmakers-design-v2/core/General/Toggle",
  component: Toggle,
  argTypes: {
    btnName: {
      control: { type: "text" },
      description: "Toggle 버튼 명칭",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    name: {
      control: { type: "text" },
      description: "Toggle 버튼 id 자동 생성을 위한 name",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Toggle {...props} />;
};
