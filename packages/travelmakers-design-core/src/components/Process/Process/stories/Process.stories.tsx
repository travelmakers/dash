import { Meta } from "@storybook/react";
import { Process } from "../Process";

export default {
  title: "@travelmakers-design-v2/core/General/Process",
  component: Process,
  argTypes: {},
} as Meta;

export const Default = () => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "gray",
        padding: "20px 10px",
      }}
    >
      <Process status={"reservation_purchase_before"} />
    </div>
  );
};
