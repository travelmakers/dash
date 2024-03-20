import { Meta } from "@storybook/react";
import { DateSearch } from "../DateSearch";

export default {
  title: "@travelmakers/core/General/DateSearch",
  component: DateSearch,
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
  return <DateSearch {...props} />;
};
