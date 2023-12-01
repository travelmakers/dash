import React, { useRef } from "react";
import { ModalWrapper } from "../ModalWrapper";
import useStyles from "./ModalSelect.style";
import { ModalSelectProps } from "./ModalSelect.type";

export interface Props
  extends Omit<React.HTMLAttributes<HTMLDialogElement>, "content"> {
  title: string;
  content?: React.ReactNode;
  isOpen: boolean;
  modalOutSideClick?: () => void;
}

export const ModalSelect = <C extends React.ElementType = "dialog">({
  title,
  content,
  isOpen,
  modalOutSideClick = () => {},
}: ModalSelectProps<C>) => {
  const { classes } = useStyles({ content });
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalWrapper
      ref={modalRef}
      isOpen={isOpen}
      className={classes.modal}
      onClick={(e) => {
        if (modalRef.current === e.target) {
          e.stopPropagation();
          modalOutSideClick();
        }
      }}
    >
      <strong className={classes.title}>{title}</strong>
      {content}
    </ModalWrapper>
  );
};

ModalSelect.displayName = "ModalSelect";
