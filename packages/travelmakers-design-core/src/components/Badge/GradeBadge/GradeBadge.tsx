import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { Icon } from "../..//Icon";
import { View } from "../../View";
import useStyles from "./GradeBadge.style";

export type GradeBadgeStylesNames = ClassNames<typeof useStyles>;

export type GradeBadgeType = "grade" | "minihotel" | "residence";

export interface Props {
  type: GradeBadgeType;
  grade: number;
  hotelType?: string;
}
export interface SharedGradeBadgeProps
  extends Props,
    TmComponentProps<GradeBadgeStylesNames> {}

export type GradeBadgeProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedGradeBadgeProps>;

type GradeBadgeComponent = <C extends React.ElementType = "div">(
  props: GradeBadgeProps<C>
) => React.ReactElement;

export const GradeBadge: GradeBadgeComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    { type, grade, hotelType, className, ...props }: GradeBadgeProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    const content = () => {
      if (type === "grade") {
        return (
          <>
            <Icon src={"IcStar"} width={16} height={16} />
            {`${grade}성급`}
            <div className={classes.vertical} />
            {hotelType ?? "호텔"}
          </>
        );
      }

      if (type === "minihotel") {
        return (
          <>
            <Icon src={"IcHotelTypeMini"} width={16} height={16} />
            <div className={classes.vertical} />
            {hotelType ?? "미니호텔"}
          </>
        );
      }

      if (type === "residence") {
        return (
          <>
            <Icon src={"IcHotelTypeResidence"} width={16} height={16} />
            <div className={classes.vertical} />
            {hotelType ?? "레지던스"}
          </>
        );
      }
    };

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        {content()}
      </View>
    );
  }
);

GradeBadge.displayName = "GradeBadge";
