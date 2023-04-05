import { Meta } from "@storybook/react";
import { MenuItem } from "../../MenuItem";
import { Menu } from "../Menu";

const menus = [
  { href: "#", name: "예약 내역" },
  { href: "#", name: "회원 정보 변경" },
  { href: "#", name: "알림 설정" },
  { href: "#", name: "자주 묻는 질문" },
  { href: "#", name: "고객센터" },
];

export default {
  title: "@travelmakers-design-v2/core/General/Menu/Menu",
  component: Menu,
  argTypes: {
    /**
     * ex)
     *    props: {
     *      // type, control, etc.
     *      defaultValue: "props의 defaultValue를 작성합니다.",
     *      description: "props 각각의 description을 작성합니다.",
     *
     *    },
     */
  },
} as Meta;

export const Default = () => {
  const items = menus.map((menu, idx) => {
    const { href, name } = menu;

    return <MenuItem key={idx} href={href} menu={name} />;
  });

  return <Menu>{items}</Menu>;
};
