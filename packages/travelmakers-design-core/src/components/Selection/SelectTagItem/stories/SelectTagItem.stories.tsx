import { Meta } from "@storybook/react";
import { SelectTagItem } from "../SelectTagItem";

export default {
  title: "@travelmakers/core/General/Selection/SelectTag/SelectTagItem",
  component: SelectTagItem,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "SelectTagItem의 label",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = () => {
  return <SelectTagItem label="레이블" />;
};
