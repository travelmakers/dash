import { Meta } from "@storybook/react";
import { OverlayProvider, useOverlay } from "@toss/use-overlay";
import { Button } from "../../../Button";
import { ModalPopup } from "../ModalPopup";

export default {
  title: "@travelmakers/core/General/Modal/ModalPopup",
  component: ModalPopup,
  argTypes: {
    title: {
      control: { type: "text" },
      description: "ModalPopup title",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    content: {
      control: { type: "text" },
      description: "ModalPopup 내용",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isOpen: {
      control: { type: "boolean" },
      description: "ModalPopup 노출 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    primaryButton: {
      description: "ModalPopup 기본 버튼 ex) 확인",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    secondaryButton: {
      description: "ModalPopup 서브 버튼 ex) 취소",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
  },
} as Meta;

const Popup = ({ ...props }) => {
  const overlay = useOverlay();

  const onModal = () =>
    overlay.open(({ isOpen, close }) => (
      <ModalPopup
        {...props}
        title={"타이틀"}
        isOpen={isOpen}
        content="콘텐츠는 두줄까지 작성 가능합니다. 콘텐츠는 두줄까지 작성 가능합니다.콘텐츠는 두줄까지 작성 가능합니다.콘텐츠는 두줄까지 작성 가능합니다.콘텐츠는 두줄까지 작성 가능합니다.콘텐츠는 두줄까지 작성 가능합니다.콘텐츠는 두줄까지 작성 가능합니다."
        primaryButton={
          <Button size={"medium"} style={{ width: "100%" }} onClick={close}>
            확인
          </Button>
        }
        secondaryButton={
          <Button
            variant={"tonal"}
            size={"medium"}
            style={{ width: "100%" }}
            onClick={close}
          >
            취소
          </Button>
        }
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
