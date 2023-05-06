import { Meta } from "@storybook/react";
import { OverlayProvider, useOverlay } from "@toss/use-overlay";
import { ModalFullPage } from "../ModalFullPage";

export default {
  title: "@travelmakers-design-v2/core/General/Modal/ModalFullPage",
  component: ModalFullPage,
  argTypes: {
    title: {
      control: { type: "text" },
      description: "ModalFullPage title",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    contentTitle: {
      control: { type: "text" },
      description: "ModalFullPage 본문 제목",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    content: {
      control: { type: "text" },
      description: "ModalFullPage 본문 내용",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isOpen: {
      control: { type: "boolean" },
      description: "ModalFullPage 노출 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    closeBtnProps: {
      description: "ModalFullPage 닫기 버튼 props",
      table: {
        type: {
          summary:
            "React.HTMLAttributes<HTMLButtonElement> & { label?: string }",
        },
      },
    },
    footer: {
      description: "ModalFullPage 하단 버튼 영역",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
  },
} as Meta;

const FullPageModal = ({ ...props }) => {
  const overlay = useOverlay();

  const onModal = () =>
    overlay.open(({ isOpen, close }) => (
      <ModalFullPage
        {...props}
        isOpen={isOpen}
        title="테스트"
        contentTitle="테스트 중입니다."
        content={"테스트"}
        closeBtnProps={{ onClick: close }}
        footer={<ModalFullPage.Footer label="버튼" onClick={close} />}
      />
    ));

  return (
    <>
      <div id={"modal"} />
      <button type={"button"} onClick={onModal}>
        풀페이지 버튼
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
