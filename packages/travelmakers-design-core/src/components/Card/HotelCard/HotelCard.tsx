import { PolymorphicRef } from "@travelmakers/styles";
import Link, { LinkProps } from "next/link";
import React, { forwardRef, PropsWithChildren } from "react";
import { GradeBadge } from "../../Badge";
import { SwiperArrowContainer } from "../../SwiperArrowContainer";
import { IconTag } from "../../Tag";
import { Typography } from "../../Typography";
import { View } from "../../View";
import {
  PriceCard,
  Props as PriceCardInsideProps,
} from "../PriceCard/PriceCard";
import useStyles from "./HotelCard.style";
import { HotelCardProps, HotelCardType, ReturnType } from "./HotelCard.type";
import { SwiperSlide } from "swiper/react";

export interface Props {
  /** HotelCard 컴포넌트의 호텔명을 표시합니다. */
  name?: string;

  /** HotelCard 컴포넌트의 자세한 설명을 표시합니다. */
  description?: string;

  /** HotelCard 컴포넌트의 호텔타입을 정합니다. */
  type: HotelCardType["type"];

  /** HotelCard 컴포넌트의 호텔타입이 default일 경우 몇성호텔인지를 표시합니다. */
  star?: string;

  hotelType?: string;

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

  locale?: "ko" | "en";
}

export const HotelCard = forwardRef(
  <C extends React.ElementType = "div">(
    {
      name,
      description,
      type,
      star,
      hotelType,
      src,
      href = "",
      price = [],
      isCoupon,
      disabled = false,
      locale = "ko",
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
            <img src={src} alt="" width={328} height={183} loading="lazy" />
            {disabled ? (
              <div className={cx(classes.soldOutBox)}>
                <Typography color="white" level="display4" strong>
                  Sold Out
                </Typography>
                <Typography color="white" level="body2">
                  {locale === "ko" ? "다음에 만나요" : "See you next time"}
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
                <GradeBadge grade={star} type={type} hotelType={hotelType} />
                {isCoupon && !disabled && (
                  <IconTag label="Coupon" type="line" />
                )}
              </div>
              <Typography level="caption" color={"primary3"}>
                {description}
              </Typography>
            </div>

            <SwiperArrowContainer
              className={cx(classes.contentFooter)}
              spaceBetween={8}
              hasNavigation
              hasDimmer
            >
              {price?.map((item, idx) => (
                <SwiperSlide
                  style={{ width: "auto", alignItems: "end" }}
                  key={idx}
                >
                  <div
                    className={
                      idx === 0
                        ? classes.contentFirstContent
                        : idx === price.length - 1 && classes.contentLastContent
                    }
                  >
                    <PriceCard
                      key={`price-card-${item.name}`}
                      name={item.name}
                      status={disabled ? "disabled" : item.status}
                      description={item.description}
                      tag={item.tag}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </SwiperArrowContainer>
          </div>
        </CustomLink>
      </View>
    );
  }
) as unknown as ReturnType;

HotelCard.displayName = "HotelCard";
