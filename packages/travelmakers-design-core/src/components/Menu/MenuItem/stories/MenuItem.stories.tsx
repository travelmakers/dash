import { Meta } from "@storybook/react";
import { Menu } from "../../Menu/Menu";
import { MenuItem } from "../MenuItem";

export default {
  title: "@travelmakers/core/General/Menu/MenuItem",
  component: MenuItem,
  argTypes: {
    href: {
      control: { type: "text" },
      defaultValue: "#",
      description: "메뉴의 링크 주소",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    menu: {
      control: { type: "text", default: "메뉴 이름" },
      defaultValue: "메뉴 이름",
      description: "메뉴의 이름",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Menu items={[<MenuItem {...props} />]} />;
};
