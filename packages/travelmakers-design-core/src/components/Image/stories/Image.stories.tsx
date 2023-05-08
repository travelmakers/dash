import { Meta } from "@storybook/react";
import { Image } from "../Image";

export default {
  title: "@travelmakers/core/General/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "이미지 src를 정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    lazy: {
      defaultValue: true,
      description: "true일 경우 lazy load가 적용됩니다.",
      control: { type: "boolean" },
    },
    width: {
      defaultValue: 400,
      description: "Image 컴포넌트의 너비를 정합니다.",
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      description: "Image 컴포넌트의 높이를 정합니다.",
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      description: "이미지 설명을 추가합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Image {...props} />;
};
