import { PolymorphicRef } from "@travelmakers/styles";
import { useArrowMove } from "@travelmakers/hooks";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, forwardRef, useRef, useState } from "react";
import { GradeBadge } from "../../Badge";
import { Icon } from "../../Icon";
import { Image } from "../../Image";
import { IconTag } from "../../Tag";
import { Typography } from "../../Typography";
import { View } from "../../View";
import {
  PriceCard,
  Props as PriceCardInsideProps,
} from "../PriceCard/PriceCard";
import useStyles from "./HotelCard.style";
import { HotelCardProps, HotelCardType, ReturnType } from "./HotelCard.type";
import { SwiperArrowContainer } from "../../SwiperArrowContainer";

export interface Props {
  /** HotelCard 컴포넌트의 호텔명을 표시합니다. */
  name?: string;

  /** HotelCard 컴포넌트의 자세한 설명을 표시합니다. */
  description?: string;

  /** HotelCard 컴포넌트의 호텔타입을 정합니다. */
  type: HotelCardType["type"];

  /** HotelCard 컴포넌트의 호텔타입이 default일 경우 몇성호텔인지를 표시합니다. */
  star?: HotelCardType["star"];

  /** HotelCard 컴포넌트의 이미지를 표시합니다. */
  src?: string;

  /** HotelCard 컴포넌트를 클릭하여 이동할 경로를 설정합니다. */
  href: LinkProps["href"];

  /** HotelCard 컴포넌트의 레이블을 표시합니다. */
  price?: PriceCardInsideProps[];

  /** HotelCard 컴포넌트의 쿠폰 표시여부를 결정합니다. */
  isCoupon?: boolean;

  /** true일 경우 HotelCard 컴포넌트가 disabled 됩니다. */
  disabled?: boolean;
}

export const HotelCard = forwardRef(
  <C extends React.ElementType = "div">(
    {
      name,
      description,
      type,
      star,
      src,
      href = "",
      price = [],
      isCoupon,
      disabled = false,
      className,
      ...props
    }: HotelCardProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();
    const CustomLink = ({ children }: PropsWithChildren<unknown>) =>
      disabled ? <div>{children}</div> : <Link href={href}>{children}</Link>;

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.container)}
        {...props}
      >
        <CustomLink>
          {/* SECTION: Image */}
          <div className={cx(classes.imageBox)}>
            <Image src={src} alt="hotelCard" fill sizes="100vw" height={183} />
            {disabled ? (
              <div className={cx(classes.soldOutBox)}>
                <Typography color="white" level="display4" strong>
                  Sold Out
                </Typography>
                <Typography color="white" level="body2">
                  다음에 만나요
                </Typography>
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* SECTION: Content */}
          <div className={cx(classes.content)}>
            <div className={cx(classes.contentHeader)}>
              <Typography
                level="subhead2"
                strong
                color={disabled ? "primary4" : "onBackground"}
              >
                {name}
              </Typography>
              <div className={cx(classes.flexBox)}>
                <GradeBadge grade={star} type={type} />
                {isCoupon && !disabled && (
                  <IconTag label="쿠폰 적용가" type="line" />
                )}
              </div>
              <Typography level="caption" color={"primary3"}>
                {description}
              </Typography>
            </div>
            <SwiperArrowContainer hasDimmer>
              {price?.map((item) => (
                <PriceCard
                  key={`price-card-${item.name}`}
                  name={item.name}
                  status={disabled ? "disabled" : item.status}
                  description={item.description}
                />
              ))}
            </SwiperArrowContainer>
          </div>
        </CustomLink>
      </View>
    );
  }
) as unknown as ReturnType;

HotelCard.displayName = "HotelCard";
