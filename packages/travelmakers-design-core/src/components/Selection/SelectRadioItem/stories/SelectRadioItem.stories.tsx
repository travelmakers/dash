import { Meta } from "@storybook/react";
import { SelectRadioItem } from "../SelectRadioItem";

export default {
  title: "@travelmakers/core/General/Selection/SelectRadio/SelectRadioItem",
  component: SelectRadioItem,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "SelectRadioItem의 label",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isVisibleButton: {
      control: { type: "boolean" },
      description: "SelectRadioItem의 Button UI 노출 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    isVisibleLabel: {
      control: { type: "boolean" },
      description: "SelectRadioItem의 label prop 노출 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "SelectRadioItem의 disabled 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <SelectRadioItem {...props} label={props.label ?? "레이블"} />;
};
