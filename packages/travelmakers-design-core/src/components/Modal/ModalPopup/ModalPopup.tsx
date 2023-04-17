import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, PropsWithChildren } from "react";
import { View } from "../../View";
import useStyles from "./ModalPopup.style";
import { ModalPopupProps, ModalPopupComponent } from "./ModalPopup.type";

export interface Props {
  // 컴포넌트 내에서 사용할 props 타입 정의
}

export const ModalPopup: ModalPopupComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    { className, children, ...props }: PropsWithChildren<ModalPopupProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className)}
        {...props}
      >
        {children}
      </View>
    );
  }
);

ModalPopup.displayName = "ModalPopup";
