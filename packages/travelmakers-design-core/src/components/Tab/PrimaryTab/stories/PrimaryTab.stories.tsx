import { Meta } from "@storybook/react";
import { PrimaryTab } from "../PrimaryTab";

const data = ["서울", "제주", "경상", "수도권"];

export default {
  title: "@travelmakers-design-v2/core/General/PrimaryTab",
  component: PrimaryTab,
  argTypes: {},
} as Meta;

export const Default = () => {
  const _items = data.map((item, idx) => (
    <PrimaryTab.Item key={idx} label={item} />
  ));

  return <PrimaryTab items={_items} />;
};
