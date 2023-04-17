import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./ModalFullPage.style";
import {
  ModalFullPageProps,
  ModalFullPageComponent,
} from "./ModalFullPage.type";
import { ModalFullPageFooter } from "../ModalFullPageFooter";

export interface Props {
  title: string;
  contentTitle: string;
  content: string;
  closeBtnProps?: React.HTMLAttributes<HTMLButtonElement>;
  footer?: React.ReactNode;
}

export const ModalFullPage: ModalFullPageComponent & {
  displayName?: string;
  Footer?: typeof ModalFullPageFooter;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      className,
      title,
      contentTitle,
      content,
      closeBtnProps,
      footer,
      ...props
    }: ModalFullPageProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <header className={classes.header}>
          <strong className={classes.title}>{title}</strong>
          <button className={classes.button} {...closeBtnProps}>
            닫기
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
    );
  }
);

ModalFullPage.displayName = "ModalFullPage";
ModalFullPage.Footer = ModalFullPageFooter;
