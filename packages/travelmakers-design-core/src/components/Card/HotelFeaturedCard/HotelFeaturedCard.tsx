import { PolymorphicRef } from "@travelmakers/styles";
import Link, { LinkProps } from "next/link";
import React, { forwardRef } from "react";
import { GradeBadge } from "../../Badge";
import { Divider } from "../../Divider";
import { Image } from "../../Image";
import { Price } from "../../Price";
import { Tag } from "../../Tag";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./HotelFeaturedCard.style";
import {
  HotelFeaturePrice,
  HotelFeatureType,
  HotelFeaturedCardProps,
  ReturnType,
} from "./HotelFeaturedCard.type";

export interface Props {
  href: LinkProps["href"];

  /** HotelFeatureCard 컴포넌트의 호텔타입을 정합니다. */
  type: HotelFeatureType["type"];

  /** HotelFeatureCard 컴포넌트의 호텔타입이 default일 경우 몇성호텔인지를 표시합니다. */
  star?: HotelFeatureType["star"];

  /** HotelFeatureCard 컴포넌트의 이미지를 표시합니다. */
  src?: string;

  /** HotelFeatureCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다. */
  labels?: string[];

  /** HotelFeatureCard 컴포넌트의 호텔명을 표시합니다. */
  name?: string;

  /** HotelFeatureCard 컴포넌트의 몇주살기에 대한 레이블을 표시합니다. */
  timelineTags?: string[];

  price: HotelFeaturePrice;

  isPrice?: boolean;
}

export const HotelFeaturedCard = forwardRef(
  <C extends React.ElementType = "div">(
    {
      href = "",
      type = "hotel",
      star,
      src,
      labels = [],
      name,
      coupons,
      timelineTags,
      price,
      isPrice = true,
      className,
      ...props
    }: HotelFeaturedCardProps<C>,
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
        <Link href={href}>
          <div className={cx(classes.cardBox)}>
            {/* SECTION: Image Section */}
            <div className={cx(classes.imageBox)}>
              <Image
                src={src}
                alt={`featureCard-${name}`}
                height={180}
                width={296}
              />
              <div className={cx(classes.imageLabel)}>
                <Tag
                  type="fill"
                  size="medium"
                  items={labels?.map((label, idx) => (
                    <Tag.Item key={idx} label={label} colorIdx={idx} />
                  ))}
                />
              </div>
            </div>

            {/* SECTION: Content Section */}
            <div className={cx(classes.contentBox)}>
              <Tag
                type="line"
                color="gray"
                roundness="half"
                size="medium"
                items={timelineTags.map((timelineTag, idx) => (
                  <Tag.Item key={idx} label={timelineTag} />
                ))}
              />
              <div>
                <Typography level="body2" color={"black"}>
                  {name}
                </Typography>
                <div className={cx(classes.hotelInfo)}>
                  <GradeBadge grade={star} type={type} />
                </div>
              </div>
              <Divider type={"horizontal"} color="outline" />
              {isPrice ? (
                <div>
                  <Price
                    {...price}
                    priceText={price.secondaryPriceText ?? price.priceText}
                    disabled={price.secondaryDisabled}
                    type="secondary"
                  />
                  <Price {...price} type="primary" />
                </div>
              ) : (
                <div className={classes.PriceNonBox}>
                  상세페이지에서 가격 확인
                </div>
              )}
            </div>
          </div>
        </Link>
      </View>
    );
  }
) as unknown as ReturnType;

HotelFeaturedCard.displayName = "HotelFeaturedCard";
