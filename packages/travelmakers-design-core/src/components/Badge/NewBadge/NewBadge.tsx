import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
  TmFontSize,
} from "@travelmakers-design-v2/styles";
import { PropsWithChildren, forwardRef } from "react";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./NewBadge.style";

export type NewBadgeStylesNames = ClassNames<typeof useStyles>;

export type NewBadgeType = "small" | "medium";

export interface Props {
  // 컴포넌트 내에서 사용할 props 타입 정의
  type: NewBadgeType;
}
export interface SharedNewBadgeProps
  extends Props,
    TmComponentProps<NewBadgeStylesNames> {}

export type NewBadgeProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedNewBadgeProps>;

type NewBadgeComponent = <C extends React.ElementType = "div">(
  props: NewBadgeProps<C>
) => React.ReactElement;

const fontMap: Record<NewBadgeType, TmFontSize> = {
  small: "display6",
  medium: "display4",
};

export const NewBadge: NewBadgeComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type,
      className,
      component,
      children,
      ...props
    }: PropsWithChildren<NewBadgeProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type });

    return (
      <View<React.ElementType>
        component={component || "div"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <Typography family={"Noto Serif KR"} level={fontMap[type]} color="#fff">
          {children || "New"}
        </Typography>
      </View>
    );
  }
);

NewBadge.displayName = "NewBadge";
