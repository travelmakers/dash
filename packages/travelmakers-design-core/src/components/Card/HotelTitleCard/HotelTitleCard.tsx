import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./HotelTitleCard.style";
import {
  HotelTitleCardProps,
  HotelTitleCardComponent,
  HotelTitleCardType,
} from "./HotelTitleCard.type";
import { Typography } from "../../Typography";
import { GradeBadge } from "../../Badge";
import { IconTag, Tag } from "../../Tag";
import { getCurrencyNumber } from "@travelmakers-design-v2/utils";
import { Price, PriceProps } from "../../Price";

export interface Props {
  /** HotelTitleCard 컴포넌트의 호텔타입을 정합니다. */
  type: HotelTitleCardType["type"];

  /** HotelTitleCard 컴포넌트의 호텔타입이 default일 경우 몇성호텔인지를 표시합니다. */
  star?: HotelTitleCardType["star"];

  /** HotelTitleCard 컴포넌트의 이미지내 상단 레이블을 표시합니다. */
  groupTags?: string[];

  /** HotelTitleCard 컴포넌트의 쿠폰 표시여부를 결정합니다. */
  isCoupon?: boolean;

  /** HotelTitleCard 컴포넌트의 이미지내 하단 레이블을 표시합니다. */
  tags?: string[];

  /** HotelTitleCard 컴포넌트의 가격을 표시합니다. */
  price?: PriceProps<"div">[];
}

export const HotelTitleCard: HotelTitleCardComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type,
      star,
      groupTags = [],
      tags = [],
      isCoupon = false,
      price,
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
        <div>
          <div>
            <Typography level="display6" color="primary1" strong>
              서울드래곤시티
            </Typography>
          </div>
          <div>
            <GradeBadge grade={star} type={type} />
          </div>
          {groupTags.length > 0 && (
            <div>
              <Tag type="line" color="gray" roundness="half" gap={4}>
                {groupTags.map((groupTag) => (
                  <Tag.Item label={groupTag} />
                ))}
              </Tag>
            </div>
          )}
        </div>
        <div className={cx(classes.divider)} />
        <div className={classes.currencyContainer}>
          <div className={classes.currencyBox}>
            <Typography level="body3" color="primary1">
              정가
            </Typography>
            <Typography level="body3" color="primary1">
              {getCurrencyNumber(1000000)}원
            </Typography>
            {isCoupon && <IconTag label="쿠폰 적용가" type="fill" />}
          </div>
          <Price {...price} type="primary" />
          <Typography level="caption" color="primary3">
            세금 및 봉사료 포함
          </Typography>
        </div>
        <Tag type="fill" color="gray" roundness="half" gap={4}>
          {tags.map((tag) => (
            <Tag.Item label={tag} />
          ))}
        </Tag>
      </View>
    );
  }
);

HotelTitleCard.displayName = "HotelTitleCard";
