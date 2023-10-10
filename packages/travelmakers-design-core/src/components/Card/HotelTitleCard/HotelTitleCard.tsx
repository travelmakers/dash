import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { GradeBadge } from "../../Badge";
import { Divider } from "../../Divider";
import { Price } from "../../Price";
import { Tag } from "../../Tag";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./HotelTitleCard.style";
import {
  HotelTitleCardProps,
  HotelTitleCardType,
  HotelTitlePrice,
  ReturnType,
} from "./HotelTitleCard.type";

export interface Props {
  name: string;

  /** HotelTitleCard 컴포넌트의 호텔타입을 정합니다. */
  type: HotelTitleCardType["type"];

  /** HotelTitleCard 컴포넌트의 호텔타입이 default일 경우 몇성호텔인지를 표시합니다. */
  star?: string;

  hotelType?: string;

  /** HotelTitleCard 컴포넌트의 이미지내 상단 레이블을 표시합니다. */
  groupTags?: string[];

  /** HotelTitleCard 컴포넌트의 쿠폰 표시여부를 결정합니다. */
  isCoupon?: boolean;

  /** HotelTitleCard 컴포넌트의 이미지내 하단 레이블을 표시합니다. */
  tags?: string[];

  /** HotelTitleCard 컴포넌트의 가격을 표시합니다. */
  price: HotelTitlePrice;

  isPrice?: boolean;

  subText?: string;
}

export const HotelTitleCard = forwardRef(
  <C extends React.ElementType = "div">(
    {
      name,
      type,
      star,
      hotelType,
      groupTags = [],
      tags = [],
      isCoupon = false,
      price,
      isPrice = true,
      subText = "세금 및 봉사료 포함",
      className,
      ...props
    }: HotelTitleCardProps<C>,
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
        <div className={classes.cardHeader}>
          <div>
            <Typography level="display6" color="primary1" strong>
              {name}
            </Typography>
          </div>
          <div>
            <GradeBadge grade={star} type={type} hotelType={hotelType} />
          </div>
          {groupTags.length > 0 && (
            <div>
              <Tag
                type="line"
                color="gray"
                roundness="full"
                size="medium"
                gap={4}
                items={groupTags.map((groupTag, idx) => (
                  <Tag.Item key={idx} label={groupTag} />
                ))}
              />
            </div>
          )}
        </div>
        <Divider type={"horizontal"} color={"outline"} />

        {isPrice && (
          <div className={classes.currencyContainer}>
            <Price
              {...price}
              priceText={price.secondaryPriceText ?? price.priceText}
              disabled={price.secondaryDisabled}
              type="secondary"
              label="정가"
              couponType={undefined}
              nightText={null}
            />
            <Price {...price} type="primary" />
            <Typography level="caption" color="primary3">
              {subText}
            </Typography>
          </div>
        )}
        <Tag
          type="fill"
          color="gray"
          roundness="full"
          gap={4}
          size="medium"
          items={tags.map((tag, idx) => (
            <Tag.Item key={idx} label={tag} />
          ))}
        />
      </View>
    );
  }
) as unknown as ReturnType;

HotelTitleCard.displayName = "HotelTitleCard";
