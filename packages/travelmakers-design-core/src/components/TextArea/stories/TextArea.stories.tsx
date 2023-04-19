import { Meta } from "@storybook/react";
import { TextArea } from "../TextArea";

export default {
  title: "@travelmakers-design-v2/core/General/TextArea",
  component: TextArea,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "textarea 라벨",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
      defaultValue: "정보를 입력해주세요.",
      description: "textarea placeholder",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    value: {
      control: {
        type: "text",
      },
      defaultValue: "",
      description: "textarea value",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    feedback: {
      control: {
        type: "text",
      },
      description: "textarea 추가 설명",
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
      description: "textarea disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    autoComplete: {
      control: {
        type: "radio",
        options: ["on", "off"],
      },
      defaultValue: "off",
      description: "textarea autoComplete",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <TextArea {...props} />;
};
