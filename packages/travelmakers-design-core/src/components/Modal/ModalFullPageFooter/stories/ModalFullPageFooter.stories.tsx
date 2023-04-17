import { Meta } from "@storybook/react";
import { ModalFullPageFooter } from "../ModalFullPageFooter";

export default {
  title: "@travelmakers-design-v2/core/General/Modal/ModalFullPageFooter",
  component: ModalFullPageFooter,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "버튼 label",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <ModalFullPageFooter {...props} />;
};
