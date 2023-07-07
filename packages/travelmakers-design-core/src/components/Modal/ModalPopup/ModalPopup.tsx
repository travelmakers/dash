import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import useStyles from "./ModalPopup.style";
import { ModalPopupProps } from "./ModalPopup.type";

export interface Props extends React.HTMLAttributes<HTMLDialogElement> {
  title: string;
  content?: string;
  primaryButton: React.ReactNode;
  secondaryButton?: React.ReactNode;
  isOpen: boolean;
}

export const ModalPopup = <C extends React.ElementType = "dialog">({
  title,
  content,
  primaryButton,
  secondaryButton,
  isOpen,
}: ModalPopupProps<C>) => {
  const { classes } = useStyles({ content });

  return (
    <ModalWrapper isOpen={isOpen} className={classes.modal}>
      <strong className={classes.title}>{title}</strong>
      {content && (
        <p
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      <ul className={classes.buttons}>
        {secondaryButton && (
          <li className={classes.button}>{secondaryButton}</li>
        )}
        <li className={classes.button}>{primaryButton}</li>
      </ul>
    </ModalWrapper>
  );
};

ModalPopup.displayName = "ModalPopup";
