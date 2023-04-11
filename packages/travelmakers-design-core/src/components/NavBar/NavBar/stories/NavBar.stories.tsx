import { Meta } from "@storybook/react";
import { NavBar } from "..";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar",
  component: NavBar,
  argTypes: {
    hasBack: {
      type: "boolean",
      defaultValue: "false",
      description: "뒤로가기 버튼의 유무",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    title: {
      control: { type: "text" },
      defaultValue: "레이블",
      description: "NavBar 타이틀",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavBar {...props} />;
};

export const NavBarWithLink = (props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavLink href="#" label="레이블" />
    </NavBar>
  );
};

export const NavBarWithButton = (props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavButton label="레이블" />
    </NavBar>
  );
};
