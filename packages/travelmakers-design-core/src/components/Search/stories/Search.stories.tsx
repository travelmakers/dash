import { Meta } from "@storybook/react";
import { Search } from "../Search";

export default {
  title: "@travelmakers/core/General/Search",
  component: Search,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fill", "line"],
      },
      defaultValue: "fill",
      description: "search 타입",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isFocued: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "외부에서 Focus를 주기 위함",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "search Disabled 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Search {...props} />;
};
