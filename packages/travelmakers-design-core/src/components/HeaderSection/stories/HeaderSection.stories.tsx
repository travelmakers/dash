import { Meta } from "@storybook/react";
import { HeaderSection } from "../HeaderSection";

export default {
  title: "@travelmakers-design-v2/core/General/HeaderSection",
  component: HeaderSection,
  argTypes: {
    type: {
      control: { type: "radio", options: ["navy", "white"] },
      defaultValue: "navy",
      description: "HeaderSection의 type을 지정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      control: { type: "text" },
      defaultValue: "Title",
      description: "HeaderSection의 title",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <HeaderSection
      {...props}
      style={{ backgroundColor: props.type === "white" && "gray" }}
    />
  );
};
