import { Meta } from "@storybook/react";
import { SelectCheckBox } from "../SelectCheckBox";

export default {
  title: "@travelmakers-design-v2/core/General/Selection/SelectCheckBox",
  component: SelectCheckBox,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "SelectCheckBox label",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    type: {
      control: { type: "radio", options: ["h40", "h48"] },
      description: "SelectCheckBox 높이",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    hasAction: {
      control: { type: "boolean" },
      description: "SelectCheckBox의 action 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    hasBackgroundColor: {
      control: { type: "boolean" },
      description: "SelectCheckBox의 배경색 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ width: "360px" }}>
      <SelectCheckBox {...props} />
    </div>
  );
};
