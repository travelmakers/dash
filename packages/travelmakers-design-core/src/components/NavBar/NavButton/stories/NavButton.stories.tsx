import { Meta } from "@storybook/react";
import { NavButton } from "../NavButton";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar/NavButton",
  component: NavButton,
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "레이블",
      description: "NavButton 타이틀",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isDisable: {
      type: "boolean",
      defaultValue: "false",
      description: "NavButton disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavButton {...props} />;
};
