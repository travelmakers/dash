import { Meta } from "@storybook/react";
import { Tag } from "../Tag";

const data = ["레이블1", "레이블2", "레이블3", "레이블4"];

export default {
  title: "@travelmakers-design-v2/core/General/Tag/Tag",
  component: Tag,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fill", "line"],
        default: "fill",
      },
      description: "TagItem의 타입을 정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    color: {
      control: {
        type: "radio",
        options: ["green", "blue", "purple", "gray"],
        default: "green",
      },
      description:
        "TagItem의 색상을 통일할 경우 사용합니다. TagItem의 colorIdx보다 우선순위를 가집니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
        default: "small",
      },
      description: "TagItem의 크기를 정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    gap: { type: "number" },
    roundness: {
      control: {
        type: "radio",
        options: ["default", "half", "full"],
        default: "default",
      },
      description: "TagItem의 모서리의 라운드 크기를 정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    items: {
      control: { type: "array" },
      description: "Tag에 표시될 리스트 입니다. Tag.Item를 사용합니다.",
      table: {
        type: {
          summary: "React.ReactNode[]",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const _items = data.map((item, idx) => <Tag.Item key={idx} label={item} />);

  return <Tag type="fill" color="green" {...props} items={_items} />;
};

export const TagUsingIdx = (props) => {
  const _items = data.map((item, idx) => (
    <Tag.Item key={idx} colorIdx={idx} label={item} />
  ));

  return <Tag type="fill" {...props} items={_items} />;
};
