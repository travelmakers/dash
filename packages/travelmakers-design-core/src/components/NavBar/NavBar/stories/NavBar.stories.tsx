import { Meta } from "@storybook/react";
import { NavBar } from "..";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar",
  component: NavBar,
  argTypes: {
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
    actionEl: {
      description:
        "NavBar에 닫기 버튼 혹은 링크를 제공합니다. NavBar.NavLink 혹은 NavBar.NavButton를 사용합니다.",
      table: {
        type: {
          summary: "React.ReactNode",
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
    <NavBar actionEl={<NavBar.NavLink href="#" label="레이블" />} {...props} />
  );
};

export const NavBarWithButton = (props) => {
  return <NavBar actionEl={<NavBar.NavButton label="레이블" />} {...props} />;
};
