import { Meta } from "@storybook/react";
import { useState } from "react";
import { Dropdown } from "../Dropdown";

const data = ["데이터1", "데이터2", "데이터3"];

export default {
  title: "@travelmakers-design-v2/core/General/Dropdown",
  component: Dropdown,
  argTypes: {},
} as Meta;

export const Default = () => {
  const [currentValue, setCurrentValue] = useState("");

  const _items = data.map((item) => (
    <Dropdown.Item
      onClick={() => setCurrentValue(item)}
      ariaSelected={currentValue === item}
    >
      {item}
    </Dropdown.Item>
  ));

  return (
    <Dropdown
      trigger={
        <Dropdown.Trigger>
          {currentValue || "옵션을 선택해주세요"}
        </Dropdown.Trigger>
      }
      content={<Dropdown.Items items={_items} />}
    />
  );
};
