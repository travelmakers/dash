import { Meta } from "@storybook/react";
import { TertiaryTab } from "../../TertiaryTab/TertiaryTab";
import { TertiaryTabItem } from "../TertiaryTabItem";

export default {
  title: "@travelmakers/core/General/Tab/TertiaryTab/TertiaryTabItem",
  component: TertiaryTabItem,
  argTypes: {
    name: {
      control: {
        type: "text",
      },
      defaultValue: "tertiary-tab-item",
      description: "TertiaryTabItem들의 radio group을 지정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "label",
      description: "TertiaryTabItem label",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    checked: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "TertiaryTabItem checked 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <TertiaryTab
      legend={"검색 기준 선택"}
      items={[<TertiaryTabItem {...props} />]}
    />
  );
};
