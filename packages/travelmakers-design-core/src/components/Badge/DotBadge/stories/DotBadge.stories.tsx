import { Meta } from "@storybook/react";
import { DotBadge } from "../DotBadge";

export default {
  title: "@travelmakers/core/General/Badge/DotBadge",
  component: DotBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["text", "number", "bullet"] },
      defaultValue: "text",
      description: "DagBadge의 type을 지정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large", "xLarge"],
      },
      defaultValue: "small",
      description: "DagBadge의 size를 지정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <DotBadge type="text" size="medium" {...props} />;
};
