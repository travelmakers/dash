import { Meta } from "@storybook/react";
import { SelectButton } from "../SelectButton";

const data = ["버튼1", "버튼2"];

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
          summary: "React.ReactNode[]",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const _items = data.map((item, idx) => (
    <SelectButton.Item key={idx} content={item} />
  ));

  return <SelectButton {...props} items={_items} />;
};
