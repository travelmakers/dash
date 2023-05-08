import { Meta } from "@storybook/react";
import { SelectCheck } from "../SelectCheck";

export default {
  title: "@travelmakers/core/General/Selection/SelectCheck",
  component: SelectCheck,
  argTypes: {
    type: {
      control: { type: "radio", options: ["small", "medium"] },
      description: "SelectCheck 사이즈 type",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      description: "SelectCheck label",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    gap: {
      control: { type: "radio", options: [8, "full"] },
      description:
        "SelectCheck내 아이콘과 label 간격입니다. 숫자 혹은 'full'입력시 justifyContent: 'space-between'로 변경됩니다.",
      table: {
        type: {
          summary: ["number", "full"],
        },
      },
    },
    fontWeight: {
      control: { type: "radio", options: [400, 700] },
      description: "SelectCheck label 폰트 굵기",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    isVisibleLabel: {
      control: { type: "boolean" },
      description: "SelectCheck의 label 표시 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    isReverse: {
      control: { type: "boolean" },
      description: "SelectCheck의 순서 번경",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "SelectCheck disabled 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    name: {
      control: {
        type: "text",
      },
      description: "SelectCheck id 생성을 위한 요소",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <SelectCheck {...props} />;
};
