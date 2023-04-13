import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, PropsWithChildren } from "react";
import { View } from "../../View";
import useStyles from "./OptionCard.style";
import { OptionCardProps, OptionCardComponent } from "./OptionCard.type";

export interface Props {
  // 컴포넌트 내에서 사용할 props 타입 정의
}

export const OptionCard: OptionCardComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    { className, ...props }: PropsWithChildren<OptionCardProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.container)}
        {...props}
      >
        <div></div>
      </View>
    );
  }
);

OptionCard.displayName = "OptionCard";
