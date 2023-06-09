import { Meta } from "@storybook/react";
import { TextArea } from "../TextArea";

export default {
  title: "@travelmakers/core/General/TextArea",
  component: TextArea,
  argTypes: {
    name: {
      control: {
        type: "text",
      },
      description: "textarea의 id 생성을 위한 필수 요소",
      table: {
        type: {
          summary: "string",
        },
      },
    },
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
      description: "textarea Disabled 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <TextArea {...props} />;
};
