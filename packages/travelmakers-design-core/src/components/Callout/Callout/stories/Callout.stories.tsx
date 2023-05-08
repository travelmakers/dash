import { Meta } from "@storybook/react";
import { Callout } from "../Callout";

const data = { title: "타이틀", items: ["추가 설명을 위한 영역입니다."] };
const dataWithoutItems = { title: "타이틀(추가적인 설명 없음)", items: [] };

export default {
  title: "@travelmakers/core/General/Callout",
  component: Callout,
  argTypes: {
    type: {
      control: { type: "radio", options: ["default", "warning"] },
      defaultValue: "default",
      description: "Callout의 type을 지정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      type: "string",
      description: "Callout에서 사용될 title을 나타냅니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    items: {
      control: { type: "object" },
      description: "Callout에서 title에 대한 추가 설명을 작성합니다.",
      defaultValue: [],
      table: {
        type: {
          summary: "string[]",
        },
      },
    },
    emptyText: {
      type: "string",
      defaultValue: "",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ display: "inline-flex" }}>
      <Callout title={data.title} {...props} items={data.items} />
    </div>
  );
};

export const CalloutWithoutItems = (props) => {
  return (
    <div style={{ display: "inline-flex" }}>
      <Callout
        title={dataWithoutItems.title}
        items={dataWithoutItems.items}
        {...props}
      />
    </div>
  );
};
