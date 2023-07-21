import { Meta } from "@storybook/react";
import { SwiperArrowContainer } from "../SwiperArrowContainer";
import { SwiperSlide } from "swiper/react";

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
    <SwiperArrowContainer {...props} hasNavigation spaceBetween={8}>
      <SwiperSlide>
        <div>1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>3</div>
      </SwiperSlide>
    </SwiperArrowContainer>
  );
};
