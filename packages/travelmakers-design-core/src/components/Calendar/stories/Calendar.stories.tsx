import { Meta } from "@storybook/react";
import { Calendar } from "../Calendar";

export default {
  title: "@travelmakers-design-v2/core/General/Calendar",
  component: Calendar,
  argTypes: {
    /**
     * ex)
     *    props: {
     *      // type, control, etc.
     *      defaultValue: "props의 defaultValue를 작성합니다.",
     *      description: "props 각각의 description을 작성합니다.",
     *      table: {
     *        type: {
     *          summary: "prop의 타입을 작성합니다.",
     *        },
     *      },
     *    },
     */
  },
} as Meta;

export const Default = (props) => {
  return <Calendar {...props} />;
};
