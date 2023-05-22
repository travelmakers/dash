import { Meta } from "@storybook/react";
import { useState } from "react";
import { SelectTag } from "../SelectTag";

const data = ["선택1", "선택2", "선택3"];

export default {
  title: "@travelmakers/core/General/Selection/SelectTag",
  component: SelectTag,
  argTypes: {
    items: {
      control: { type: "array" },
      description:
        "SelectTag에 표시될 리스트 입니다. SelectRadio.Item를 사용합니다.",
      table: {
        type: {
          summary: "SelectTag.Item[]",
        },
      },
    },
  },
} as Meta;

export const Default = () => {
  const [currentTab, setCurrentTab] = useState("선택1");

  const _items = data.map((item, idx) => (
    <SelectTag.Item
      key={idx}
      label={item}
      value={item}
      checked={currentTab === item}
      onChange={(e) => {
        const { value } = e.target as HTMLInputElement;

        setCurrentTab(value);
      }}
    />
  ));

  return <SelectTag items={_items} />;
};
