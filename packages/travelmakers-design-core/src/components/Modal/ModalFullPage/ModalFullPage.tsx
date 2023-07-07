import React from "react";
import { ModalFullPageFooter } from "../ModalFullPageFooter";
import { ModalWrapper } from "../ModalWrapper";
import useStyles from "./ModalFullPage.style";
import { ModalFullPageProps } from "./ModalFullPage.type";

export interface Props {
  title: string;
  contentTitle?: string;
  content: React.ReactNode;
  closeBtnProps: React.HTMLAttributes<HTMLButtonElement> & { label?: string };
  isOpen: boolean;
  footer?: React.ReactNode;
  hasIframe?: boolean;
}

export const ModalFullPage = <C extends React.ElementType = "dialog">({
  title,
  contentTitle,
  content,
  closeBtnProps,
  footer,
  isOpen,
  hasIframe,
}: ModalFullPageProps<C>) => {
  const { label: closeBtnLabel = "닫기", ...closeBtnPropsRest } = closeBtnProps;
  const { classes } = useStyles({ hasIframe });

  return (
    <ModalWrapper isOpen={isOpen} className={classes.modal}>
      <header className={classes.header}>
        <strong className={classes.title}>{title}</strong>
        <button className={classes.button} {...closeBtnPropsRest}>
          {closeBtnLabel}
        </button>
      </header>
      <div className={classes.body}>
        {contentTitle && (
          <strong className={classes.bodyTitle}>{contentTitle}</strong>
        )}
        {typeof content === "object" ? (
          content
        ) : (
          <p
            className={classes.bodyText}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
      {footer}
    </ModalWrapper>
  );
};

ModalFullPage.displayName = "ModalFullPage";
ModalFullPage.Footer = ModalFullPageFooter;
