import { Meta } from "@storybook/react";
import { SelectDropBox } from "../SelectDropBox";

const data = ["데이터1", "데이터2", "데이터3", "데이터4", "데이터5"];
const countryData = [
  {
    iso: "GH",
    iso3: "GHA",
    name_english: "Ghana",
    name_korean: "가나",
    phonecode: 233,
  },
  {
    iso: "GH",
    iso3: "GHA",
    name_english: "Ghana",
    name_korean: "가나",
    phonecode: 233,
  },
  {
    iso: "GH",
    iso3: "GHA",
    name_english: "Ghana",
    name_korean: "가나",
    phonecode: 233,
  },
];

export default {
  title: "@travelmakers/core/General/Selection/SelectDropBox",
  component: SelectDropBox,
  argTypes: {
    type: {
      control: { type: "radio", options: ["option", "filter"] },
      description: "SelectDropBox type",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      description: "SelectDropBox label",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    initValue: {
      control: { type: "text" },
      description: "SelectDropBox 초기 값",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    trigger: {
      description: "SelectDropBox Trigger, SelectDropBox.Trigger를 사용합니다.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    content: {
      description:
        "SelectDropBox Dropdown, SelectDropBox.Items와 SelectDropBox.Item로 구성합니다.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    direction: {
      control: { type: "radio", options: ["forward", "reverse"] },
      description: "SelectDropBox direction",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "SelectDropBox placeholder",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isVisibleLabel: {
      control: { type: "boolean" },
      description: "SelectDropBox label 노출 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "SelectDropBox disable 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const _items = data.map((item) => <SelectDropBox.Item value={item} />);

  return (
    <SelectDropBox
      {...props}
      trigger={<SelectDropBox.Trigger />}
      content={<SelectDropBox.Items items={_items} />}
      label={props.label || "레이블"}
    />
  );
};

export const Reverse = (props) => {
  const _items = data
    .splice(1, 2)
    .map((item) => <SelectDropBox.Item value={item} />);

  return (
    <div style={{ paddingTop: "30vh" }}>
      <SelectDropBox
        {...props}
        trigger={<SelectDropBox.Trigger />}
        content={<SelectDropBox.Items items={_items} />}
        label={props.label || "레이블"}
        direction="reverse"
      />
    </div>
  );
};

export const Country = (props) => {
  const _items = countryData.map((item) => (
    <SelectDropBox.Item
      value={
        <>
          <div style={{ display: "flex", gap: "4px" }}>
            <div>+{item.phonecode}</div>
            <div>{item.name_korean}</div>
          </div>
          <div>{item.name_english}</div>
        </>
      }
    />
  ));

  return (
    <SelectDropBox
      {...props}
      trigger={<SelectDropBox.Trigger />}
      content={<SelectDropBox.Items items={_items} />}
      label={props.label || "레이블"}
    />
  );
};
