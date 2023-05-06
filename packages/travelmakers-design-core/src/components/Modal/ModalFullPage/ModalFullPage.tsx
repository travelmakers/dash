import { useBlockScrolling } from "@travelmakers-design-v2/hooks";
import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import { ModalFullPageFooter } from "../ModalFullPageFooter";
import { ModalPortal } from "../ModalPortal";
import useStyles from "./ModalFullPage.style";
import {
  ModalFullPageComponent,
  ModalFullPageProps,
} from "./ModalFullPage.type";

export interface Props {
  title: string;
  contentTitle: string;
  content: string;
  closeBtnProps: React.HTMLAttributes<HTMLButtonElement> & { label?: string };
  isOpen: boolean;
  footer?: React.ReactNode;
}

export const ModalFullPage: ModalFullPageComponent & {
  displayName?: string;
  Footer?: typeof ModalFullPageFooter;
} = forwardRef(
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
              <p
                className={classes.bodyText}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            {footer}
          </View>
        </div>
      </ModalPortal>
    );
  }
);

ModalFullPage.displayName = "ModalFullPage";
ModalFullPage.Footer = ModalFullPageFooter;
