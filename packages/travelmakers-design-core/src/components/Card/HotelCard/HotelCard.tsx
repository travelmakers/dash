import { PolymorphicRef } from "@travelmakers/styles";
import { useArrowMove } from "@travelmakers/hooks";
import Link, { LinkProps } from "next/link";
import React, { forwardRef, useRef, useState } from "react";
import { GradeBadge } from "../../Badge";
import { Icon } from "../../Icon";
import { Image } from "../../Image";
import { IconTag } from "../../Tag";
import { Typography } from "../../Typography";
import { View } from "../../View";
import { PriceCard, PriceCardProps } from "../PriceCard";
import useStyles from "./HotelCard.style";
import { HotelCardProps, HotelCardType, ReturnType } from "./HotelCard.type";

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
  price?: PriceCardProps<"div">[];

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
    const MAX_COUNT = (price?.length ?? 1) - 1;
    const contentRef = useRef([]);
    const {
      arrowLeftClickHandler,
      arrowRightClickHandler,
      setLeftArrowHover,
      setRightArrowHover,
      leftArrowHover,
      rightArrowHover,
      page,
    } = useArrowMove(contentRef, MAX_COUNT);
    const { classes, cx } = useStyles({
      leftArrowHover,
      rightArrowHover,
    });

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.container)}
        {...props}
      >
        <Link href={href}>
          {/* SECTION: Image */}
          <div className={cx(classes.imageBox)}>
            <Image src={src} alt="hotelCard" width={"100%"} height={"100%"} />
            {disabled && (
              <div className={cx(classes.soldOutBox)}>
                <Typography color="white" level="display4" strong>
                  Sold Out
                </Typography>
                <Typography color="white" level="body2">
                  다음에 만나요
                </Typography>
              </div>
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
            <div
              className={cx(classes.contentTag)}
              onMouseEnter={() => {
                page !== 0 && setLeftArrowHover(true);
                page < MAX_COUNT && setRightArrowHover(true);
              }}
              onMouseMove={() => {
                if (!disabled) {
                  page !== 0
                    ? setLeftArrowHover(true)
                    : setLeftArrowHover(false);
                  page < MAX_COUNT
                    ? setRightArrowHover(true)
                    : setRightArrowHover(false);
                }
              }}
              onMouseLeave={() => {
                setLeftArrowHover(false);
                setRightArrowHover(false);
              }}
            >
              {/* NOTE: 안개표시 */}
              <div className={cx(classes.contentDimmer)} />
              {/* NOTE: 화살표(arrow) */}
              <div
                className={cx(classes.contentScroll, classes.contentScrollLeft)}
                onClick={(e) => {
                  e.preventDefault();
                  arrowLeftClickHandler();
                }}
              >
                <Icon src="IcAngleLeft" width={16} height={16} />
              </div>
              <div
                className={cx(
                  classes.contentScroll,
                  classes.contentScrollRight
                )}
                onClick={(e) => {
                  e.preventDefault();
                  arrowRightClickHandler();
                }}
              >
                <Icon src="IcAngleRight" width={16} height={16} />
              </div>
              {/* NOTE: tag */}
              <div className={cx(classes.contentScrollContainer)}>
                {price?.map((item, index) => (
                  <PriceCard
                    key={`price-card-${item.name}`}
                    ref={(el) => (contentRef.current[index] = el)}
                    name={item.name}
                    status={disabled ? "disabled" : item.status}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </Link>
      </View>
    );
  }
) as unknown as ReturnType;

HotelCard.displayName = "HotelCard";
