import { Meta } from "@storybook/react";
import { OverlayProvider, useOverlay } from "@toss/use-overlay";
import { ModalSelect } from "../ModalSelect";

export default {
  title: "@travelmakers/core/General/Modal/ModalSelect",
  component: ModalSelect,
  argTypes: {
    title: {
      control: { type: "text" },
      description: "ModalSelect title",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    content: {
      control: { type: "text" },
      description: "ModalSelect 내용",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isOpen: {
      control: { type: "boolean" },
      description: "ModalSelect 노출 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

const Popup = ({ ...props }) => {
  const overlay = useOverlay();

  const onModal = () =>
    overlay.open(({ isOpen, close }) => (
      <ModalSelect
        {...props}
        title={"타이틀"}
        isOpen={isOpen}
        content="콘텐츠는 두줄까지 작성 가능합니다. "
      />
    ));

  return (
    <>
      <div id="modal" />
      <button type={"button"} onClick={onModal}>
        팝업 버튼
      </button>
    </>
  );
};

export const Default = (props) => {
  return (
    <OverlayProvider>
      <Popup {...props} />
    </OverlayProvider>
  );
};
