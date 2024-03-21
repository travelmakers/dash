import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import useStyles from "./ModalPopup.style";
import { ModalPopupProps } from "./ModalPopup.type";

export interface Props
  extends Omit<React.HTMLAttributes<HTMLDialogElement>, "content"> {
  title: string;
  content?: React.ReactNode;
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
      {content && typeof content === "string" ? (
        <p
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        content && <div>{content}</div>
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
