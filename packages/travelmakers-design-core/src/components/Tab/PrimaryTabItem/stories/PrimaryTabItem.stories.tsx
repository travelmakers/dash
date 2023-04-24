import { Meta } from "@storybook/react";
import { PrimaryTabItem } from "../PrimaryTabItem";

export default {
  title: "@travelmakers-design-v2/core/General/Tab/PrimaryTab/PrimaryTabItem",
  component: PrimaryTabItem,
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "label",
      description: "PrimaryTabItem label",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    checked: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "PrimaryTabItem checked 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <PrimaryTabItem {...props} />;
};
