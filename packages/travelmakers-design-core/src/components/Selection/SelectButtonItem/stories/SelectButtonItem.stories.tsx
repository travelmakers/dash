import { Meta } from "@storybook/react";
import { useState } from "react";
import { SelectButton } from "../../SelectButton/SelectButton";
import { SelectButtonItem } from "../SelectButtonItem";

const data = ["선택1", "선택2"];

export default {
  title: "@travelmakers/core/General/Selection/SelectButton/SelectButtonItem",
  component: SelectButtonItem,
  argTypes: {
    content: {
      control: {
        type: "text",
      },
      description: "SelectButtonItem 내용",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const [currentTab, setCurrentTab] = useState("선택1");

  const _items = data.map((item, idx) => (
    <SelectButton.Item
      key={idx}
      content={item}
      value={item}
      checked={currentTab === item}
      onChange={(e) => {
        const { value } = e.target as HTMLInputElement;

        setCurrentTab(value);
      }}
      {...props}
    />
  ));

  return (
    <div style={{ display: "inline-flex" }}>
      <SelectButton label={"버튼 선택 그룹"} items={_items} />
    </div>
  );
};
