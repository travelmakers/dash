import { useBlockScrolling } from "@travelmakers/hooks";
import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import { ModalPortal } from "../ModalPortal";
import useStyles from "./ModalPopup.style";
import { ModalPopupComponent, ModalPopupProps } from "./ModalPopup.type";

export interface Props extends React.HTMLAttributes<HTMLDialogElement> {
  title: string;
  content?: string;
  primaryButton: React.ReactNode;
  secondaryButton?: React.ReactNode;
  isOpen: boolean;
}

export const ModalPopup: ModalPopupComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "dialog">(
    {
      title,
      content,
      primaryButton,
      secondaryButton,
      isOpen,
      className,
      ...props
    }: ModalPopupProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    // NOTE: ModalPopup 오픈 시 페이지 스크롤 blocking
    useBlockScrolling(isOpen);

    if (!isOpen) return null;

    return (
      <ModalPortal>
        <View<React.ElementType>
          component={"dialog"}
          ref={ref}
          className={cx(classes.root, className)}
          open={isOpen}
          {...props}
        >
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
        </View>
      </ModalPortal>
    );
  }
);

ModalPopup.displayName = "ModalPopup";
