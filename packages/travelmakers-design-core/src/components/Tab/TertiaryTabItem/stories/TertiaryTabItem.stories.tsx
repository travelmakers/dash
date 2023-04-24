import { Meta } from "@storybook/react";
import { TertiaryTabItem } from "../TertiaryTabItem";

export default {
  title: "@travelmakers-design-v2/core/General/Tab/TertiaryTab/TertiaryTabItem",
  component: TertiaryTabItem,
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "label",
      description: "TertiaryTabItem label",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    checked: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "TertiaryTabItem checked 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <TertiaryTabItem {...props} />;
};
