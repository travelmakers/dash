import { Meta } from "@storybook/react";
import { Input } from "../Input";

export default {
  title: "@travelmakers-design-v2/core/General/Input",
  component: Input,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "input 라벨",
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
      description: "input placeholder",
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
      description: "input 추가 설명",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    subfix: {
      control: {
        type: "text",
      },
      description: "input 사용 시 인증 시간,결과 등을 나타냅니다.",
      table: {
        type: {
          summary: ["string", "number"],
        },
      },
    },
    isError: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "input Error 여부",
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
      description: "input disabled",
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
      description: "input autoComplete",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Input {...props} />;
};
