import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Icon } from "../../Icon";
import { Divider } from "../../Divider";
import { View } from "../../View";
import useStyles from "./GradeBadge.style";
import { GradeBadgeProps, GradeBadgeType, ReturnType } from "./GradeBadge.type";

export interface Props {
  type: GradeBadgeType;
  grade: string;
  hotelType?: string;
}

export const GradeBadge = forwardRef(
  <C extends React.ElementType = "div">(
    { type, grade, hotelType, className, ...props }: GradeBadgeProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    const content = () => {
      if (type === "hotel") {
        return (
          <>
            <Icon src={"IcStar"} width={16} height={16} />
            <span>{`${grade}`}</span>
            <Divider type="vertical" height="10px" />
            <span>{hotelType ?? "호텔"}</span>
          </>
        );
      }

      if (type === "minihotel") {
        return (
          <>
            <Icon src={"IcHotelTypeMini"} width={16} height={16} />
            <Divider type="vertical" height="10px" />
            <span>{hotelType ?? "미니호텔"}</span>
          </>
        );
      }

      if (type === "residence") {
        return (
          <>
            <Icon src={"IcHotelTypeResidence"} width={16} height={16} />
            <Divider type="vertical" height="10px" />
            <span>{hotelType ?? "레지던스"}</span>
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
) as unknown as ReturnType;

GradeBadge.displayName = "GradeBadge";
