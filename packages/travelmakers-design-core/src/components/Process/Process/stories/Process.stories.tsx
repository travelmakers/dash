import { Meta } from "@storybook/react";
import { Process } from "../Process";

export default {
  title: "@travelmakers-design-v2/core/General/Process",
  component: Process,
  argTypes: {
    status: {
      control: {
        type: "radio",
        options: [
          "reservation_purchase_before",
          "extend_purchase_before",
          "reservation_purchase_done",
          "extend_purchase_done",
        ],
      },
      defaultValue: "reservation_purchase_before",
      description: "결제 진행 상황",
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
    <div
      style={{
        display: "inline-block",
        backgroundColor: "gray",
        padding: "20px 10px",
      }}
    >
      <Process status={"reservation_purchase_before"} {...props} />
    </div>
  );
};
