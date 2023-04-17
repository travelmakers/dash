import { Meta } from "@storybook/react";
import { ModalFullPage } from "../ModalFullPage";

export default {
  title: "@travelmakers-design-v2/core/General/Modal/ModalFullPage",
  component: ModalFullPage,
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

export const Default = () => {
  return (
    <div style={{ height: "500px", backgroundColor: "#e8e8e8" }}>
      <ModalFullPage footer={<ModalFullPage.Footer label="버튼" />} />
    </div>
  );
};
