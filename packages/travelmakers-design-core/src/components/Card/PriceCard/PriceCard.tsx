import { PolymorphicRef, TmColor } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./PriceCard.style";
import { PriceCardProps, ReturnType, StatusType } from "./PriceCard.type";
import { HotelTitlePrice } from "../HotelTitleCard/HotelTitleCard.type";
import { Price } from "../../Price";

export interface Props {
  /** Hotel 타입을 정합니다. */
  status: StatusType;

  /** PriceCard 컴포넌트의 상품명을 입력합니다. */
  name: string;

  /** PriceCard 컴포넌트의 자세한 설명을 입력합니다. */
  description?: HotelTitlePrice | string;

  locale?: "ko" | "en";
}

export const PriceCard = forwardRef(
  <C extends React.ElementType = "div">(
    {
      status,
      name,
      description,
      price,
      tag,
      locale = "ko",
      className,
      ...props
    }: PriceCardProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();
    const STATUS_COLOR: {
      active: TmColor;
      disabled: TmColor;
    } = { active: "primary1", disabled: "primary4" };

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.container)}
        {...props}
      >
        <Typography level="body2" color={STATUS_COLOR[status]} strong>
          {name}
        </Typography>

        {typeof description === "string" ? (
          <Typography level="body3" color={STATUS_COLOR[status]} strong>
            {description}
          </Typography>
        ) : (
          <>
            <Price
              {...description}
              locale={locale}
              priceText={
                description.secondaryPriceText ?? description.priceText
              }
              disabled={description.secondaryDisabled}
              type="secondary"
              label={description.label}
              couponType={undefined}
            />
            <Price {...description} locale={locale} type="primary" />
          </>
        )}
      </View>
    );
  }
) as unknown as ReturnType;

PriceCard.displayName = "PriceCard";
