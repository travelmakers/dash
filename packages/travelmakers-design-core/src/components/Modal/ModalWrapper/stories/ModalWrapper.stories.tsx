import { Meta } from "@storybook/react";
import { OverlayProvider, useOverlay } from "@toss/use-overlay";
import { ModalWrapper } from "../ModalWrapper";

export default {
  title: "@travelmakers/core/General/Modal/ModalWrapper",
  component: ModalWrapper,
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "ModalWrapper 노출 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

const FullPageModal = () => {
  const overlay = useOverlay();

  const onModal = () =>
    overlay.open(({ isOpen }) => (
      <ModalWrapper isOpen={isOpen}>모달입니다!</ModalWrapper>
    ));

  return (
    <>
      <div id={"modal"} />
      <button type={"button"} onClick={onModal}>
        버튼
      </button>
    </>
  );
};

export const Default = (props) => {
  return (
    <OverlayProvider>
      <FullPageModal {...props} />
    </OverlayProvider>
  );
};
