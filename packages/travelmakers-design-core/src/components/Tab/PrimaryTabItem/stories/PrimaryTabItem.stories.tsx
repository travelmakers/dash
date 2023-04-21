import { Meta } from "@storybook/react";
import { PrimaryTabItem } from "../PrimaryTabItem";

export default {
  title: "@travelmakers-design-v2/core/General/PrimaryTabItem",
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
  },
} as Meta;

export const Default = (props) => {
  return <PrimaryTabItem {...props} />;
};
