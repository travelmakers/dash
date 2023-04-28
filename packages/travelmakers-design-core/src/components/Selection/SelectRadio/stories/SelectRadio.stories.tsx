import { Meta } from "@storybook/react";
import { useState } from "react";
import { SelectRadio } from "../SelectRadio";

const data = ["선택1", "선택2"];

export default {
  title:
    "@travelmakers-design-v2/core/General/Selection/SelectRadio/SelectRadio",
  component: SelectRadio,
  argTypes: {
    items: {
      control: { type: "array" },
      description:
        "SelectRadio에 표시될 리스트 입니다. SelectRadio.Item를 사용합니다.",
      table: {
        type: {
          summary: "SelectRadioItem[]",
        },
      },
    },
  },
} as Meta;

export const Default = () => {
  const [currentTab, setCurrentTab] = useState("선택1");

  const _items = data.map((item, idx) => (
    <SelectRadio.Item
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

  return <SelectRadio items={_items} style={{ columnGap: "8px" }} />;
};
