import { Meta } from "@storybook/react";
import { useState } from "react";
import { TertiaryTab } from "../TertiaryTab";

const data = ["지역으로 찾기", "기간으로 찾기"];

export default {
  title: "@travelmakers-design-v2/core/General/Tab/TertiaryTab/TertiaryTab",
  component: TertiaryTab,
  argTypes: {
    items: {
      control: { type: "array" },
      description: "Tab에 표시될 리스트 입니다. TertiaryTab.Item를 사용합니다.",
      table: {
        type: {
          summary: "React.ReactNode[]",
        },
      },
    },
  },
} as Meta;

export const Default = () => {
  const [currentTab, setCurrentTab] = useState("지역으로 찾기");

  const _items = data.map((item, idx) => (
    <TertiaryTab.Item
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

  return <TertiaryTab legend={"검색 기준 선택"} items={_items} />;
};
