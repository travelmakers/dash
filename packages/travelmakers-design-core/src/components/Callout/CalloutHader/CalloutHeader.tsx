import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmColor,
  TmComponentProps,
  useTmTheme,
} from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { Icon } from "../../Icon";
import { View } from "../../View";
import { CalloutType } from "../Callout/Callout";
import useStyles from "./CalloutHeader.style";

export type CalloutHeaderStylesNames = ClassNames<typeof useStyles>;

export interface Props {
  type: CalloutType;
  title: string;
}
export interface SharedCalloutHeaderProps
  extends Props,
    TmComponentProps<CalloutHeaderStylesNames> {}

export type CalloutHeaderProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedCalloutHeaderProps>;

type CalloutHeaderComponent = <C extends React.ElementType = "dt">(
  props: CalloutHeaderProps<C>
) => React.ReactElement;

export const CALLOUT_COLOR: Record<CalloutType, TmColor> = {
  default: "secondary",
  warning: "error",
};

export const CalloutHeader: CalloutHeaderComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "dt">(
    { type, title, className, ...props }: CalloutHeaderProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { colors } = useTmTheme();
    const { classes, cx } = useStyles({ type });

    return (
      <View<React.ElementType>
        component={"dt"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <Icon
          src="IcAlert"
          width={14}
          height={14}
          color={colors[CALLOUT_COLOR[type]]}
        />
        {title}
      </View>
    );
  }
);

CalloutHeader.displayName = "CalloutHeader";
