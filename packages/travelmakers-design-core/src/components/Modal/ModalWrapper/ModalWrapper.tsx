import { useBlockScrolling } from "@travelmakers/hooks";
import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef, PropsWithChildren } from "react";
import { View } from "../../View";
import { ModalPortal } from "../ModalPortal";
import useStyles from "./ModalWrapper.style";
import { ModalWrapperProps, ReturnType } from "./ModalWrapper.type";

export interface Props {
  isOpen: boolean;
}

export const ModalWrapper = forwardRef(
  <C extends React.ElementType = "dialog">(
    {
      isOpen,
      className,
      children,
      ...props
    }: PropsWithChildren<ModalWrapperProps<C>>,
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
          className={classes.root}
          open={isOpen}
          {...props}
        >
          <div className={cx(classes.modal, className)}>{children}</div>
        </View>
      </ModalPortal>
    );
  }
) as unknown as ReturnType;

ModalWrapper.displayName = "ModalWrapper";
