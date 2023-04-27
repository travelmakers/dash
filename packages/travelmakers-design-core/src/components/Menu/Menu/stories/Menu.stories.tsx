import { Meta } from "@storybook/react";
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
    const { href, name } = menu;

    return <Menu.Item key={idx} href={href} menu={name} />;
  });

  return (
    <div style={{ display: "inline-flex" }}>
      <Menu items={_items} />
    </div>
  );
};
