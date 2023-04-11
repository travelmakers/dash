import { Meta } from "@storybook/react";
import { NavLink } from "../NavLink";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar/NavLink",
  component: NavLink,
  argTypes: {
    href: {
      control: { type: "text" },
      defaultValue: "#",
      description: "NavLink href",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "레이블",
      description: "NavLink 타이틀",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isDisable: {
      type: "boolean",
      defaultValue: "false",
      description: "NavLink disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavLink {...props} />;
};
