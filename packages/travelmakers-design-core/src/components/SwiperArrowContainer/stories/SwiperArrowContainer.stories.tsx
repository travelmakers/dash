import { Meta } from "@storybook/react";
import { SwiperArrowContainer } from "../SwiperArrowContainer";

export default {
  title: "@travelmakers/core/General/SwiperArrowContainer",
  component: SwiperArrowContainer,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "SwiperArrowContainer Disabled 여부",
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
    <SwiperArrowContainer {...props}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </SwiperArrowContainer>
  );
};
