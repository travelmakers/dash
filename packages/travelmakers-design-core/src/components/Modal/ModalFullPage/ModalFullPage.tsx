import { useBlockScrolling } from "@travelmakers/hooks";
import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { View } from "../../View";
import { ModalFullPageFooter } from "../ModalFullPageFooter";
import { ModalPortal } from "../ModalPortal";
import useStyles from "./ModalFullPage.style";
import { ModalFullPageProps, ReturnType } from "./ModalFullPage.type";

export interface Props {
  title: string;
  contentTitle: string;
  content: React.ReactNode;
  closeBtnProps: React.HTMLAttributes<HTMLButtonElement> & { label?: string };
  isOpen: boolean;
  footer?: React.ReactNode;
}

export const ModalFullPage = forwardRef(
  <C extends React.ElementType = "dialog">(
    {
      className,
      title,
      contentTitle,
      content,
      closeBtnProps,
      footer,
      isOpen,
      ...props
    }: ModalFullPageProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { label: closeBtnLabel = "닫기", ...closeBtnPropsRest } =
      closeBtnProps;
    const { classes, cx } = useStyles();

    // NOTE: ModalFullPage 오픈 시 페이지 스크롤 blocking
    useBlockScrolling(isOpen);

    if (!isOpen) return null;

    return (
      <ModalPortal>
        <div className={cx(classes.root, className)}>
          <View<React.ElementType>
            component={"dialog"}
            ref={ref}
            className={classes.dialog}
            open={isOpen}
            {...props}
          >
            <header className={classes.header}>
              <strong className={classes.title}>{title}</strong>
              <button className={classes.button} {...closeBtnPropsRest}>
                {closeBtnLabel}
              </button>
            </header>
            <div className={classes.body}>
              <strong className={classes.bodyTitle}>{contentTitle}</strong>
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
          </View>
        </div>
      </ModalPortal>
    );
  }
) as unknown as ReturnType;

ModalFullPage.displayName = "ModalFullPage";
ModalFullPage.Footer = ModalFullPageFooter;
