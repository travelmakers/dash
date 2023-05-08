import { Meta } from "@storybook/react";
import { useState } from "react";
import { SelectButton } from "../SelectButton";

const data = ["선택1", "선택2", "선택3"];

export default {
  title:
    "@travelmakers-design-v2/core/General/Selection/SelectButton/SelectButton",
  component: SelectButton,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "SelectButton 라벨",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    feedback: {
      control: {
        type: "text",
      },
      description: "SelectButton 추가 설명",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    items: {
      control: { type: "array" },
      description:
        "SelectButton에 표시될 리스트 입니다. SelectButton.Item를 사용합니다.",
      table: {
        type: {
          summary: "SelectButtonItem[]",
        },
      },
    },
    callout: {
      control: { type: "object" },
      description: "SelectButton와 함께 사용되는 SelectButton.Callout입니다.",
      table: {
        type: {
          summary: "Callout[]",
        },
      },
    },
    isVisibleLabel: {
      control: { type: "boolean" },
      description: "SelectButton의 label prop 노출 여부",
      table: {
        type: {
          summary: "boolean",
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
    />
  ));

  return (
    <SelectButton
      {...props}
      label={props.label ?? "선택 그룹"}
      items={_items}
    />
  );
};

export const SelectButtonWithCallout = (props) => {
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
    />
  ));

  return (
    <div style={{ display: "inline-flex" }}>
      <SelectButton
        {...props}
        label={props.label ?? "선택 그룹"}
        items={props.items ?? _items}
        callout={<SelectButton.Callout title={"타이틀"} />}
      />
    </div>
  );
};
