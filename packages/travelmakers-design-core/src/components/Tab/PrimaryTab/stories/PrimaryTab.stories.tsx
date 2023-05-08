import { Meta } from "@storybook/react";
import { useState } from "react";
import { PrimaryTab } from "../PrimaryTab";

const data = ["서울", "제주", "경상", "수도권"];

export default {
  title: "@travelmakers/core/General/Tab/PrimaryTab/PrimaryTab",
  component: PrimaryTab,
  argTypes: {
    items: {
      control: { type: "array" },
      description: "Tab에 표시될 리스트 입니다. PrimaryTab.Item를 사용합니다.",
      table: {
        type: {
          summary: "React.ReactNode[]",
        },
      },
    },
  },
} as Meta;

export const Default = () => {
  const [currentTab, setCurrentTab] = useState("서울");

  const _items = data.map((item, idx) => (
    <PrimaryTab.Item
      key={idx}
      label={item}
      value={item}
      onChange={(e) => {
        const { value } = e.target as HTMLInputElement;

        setCurrentTab(value);
      }}
      checked={item === currentTab}
    />
  ));

  return <PrimaryTab items={_items} />;
};
