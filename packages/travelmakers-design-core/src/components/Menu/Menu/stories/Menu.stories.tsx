import { Meta } from "@storybook/react";
import { MenuItemType } from "../../MenuItem/MenuItem.type";
import { Menu } from "../Menu";

const menus: {
  type?: MenuItemType;
  name: string;
  href?: string | undefined;
}[] = [
  { href: "#", name: "예약 내역" },
  { href: "#", name: "회원 정보 변경" },
  { href: "#", name: "알림 설정" },
  { href: "#", name: "자주 묻는 질문" },
  { type: "button", name: "고객센터" },
];

export default {
  title: "@travelmakers/core/General/Menu/Menu",
  component: Menu,
  argTypes: {
    items: {
      control: { type: "array" },
      description: "Menu에 표시될 리스트 입니다. Menu.Item를 사용합니다.",
      table: {
        type: {
          summary: "MenuItem[]",
        },
      },
    },
  },
} as Meta;

export const Default = () => {
  const _items = menus.map((menu, idx) => {
    const { type, href, name } = menu;

    return <Menu.Item key={idx} menu={name} href={href} type={type} />;
  });

  return (
    <div style={{ maxWidth: "343px" }}>
      <Menu items={_items} />
    </div>
  );
};
