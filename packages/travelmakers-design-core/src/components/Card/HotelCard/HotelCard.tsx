import { PolymorphicRef } from "@travelmakers/styles";
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
    const INIT_PAGE = 0;
    const MAX_COUNT = (price?.length ?? 1) - 1;
    const [page, setPage] = useState<number>(INIT_PAGE);
    const [leftArrowHover, setLeftArrowHover] = useState(false);
    const [rightArrowHover, setRightArrowHover] = useState(false);
    const arrowLeftRef = useRef(null);
    const arrowRightRef = useRef(null);
    const contentRef = useRef([]);
    const { classes, cx } = useStyles({
      leftArrowHover,
      rightArrowHover,
    });

    function arrowClickHandler(arrow: "left" | "right") {
      const isLeftArrow = arrow === "left";
      const pageMove = calculatePageMove(isLeftArrow);
      const newPage = isLeftArrow ? page - pageMove : page + pageMove;

      if (pageMove !== 0) {
        arrowHover(isLeftArrow, newPage);
        setPage(newPage);
        moveScroll(newPage);
      }
    }

    function arrowHover(isLeftArrow: boolean, newPage: number) {
      if (isLeftArrow) {
        setLeftArrowHover(newPage > INIT_PAGE);
        setRightArrowHover(true);
      } else {
        setLeftArrowHover(true);
        setRightArrowHover(newPage < MAX_COUNT);
      }
    }

    function calculatePageMove(isLeftArrow: boolean) {
      const defaultPageMove = 2;

      if (isLeftArrow) {
        if (page <= INIT_PAGE) return 0;

        const currentContent = contentRef.current?.[page - 1];
        return !currentContent || page - 1 === 0 ? 1 : defaultPageMove;
      } else {
        if (page >= MAX_COUNT) return 0;

        const currentContent = contentRef.current?.[page + defaultPageMove];
        return !currentContent ? 1 : page === 0 ? 3 : defaultPageMove;
      }
    }

    function moveScroll(newPage: number) {
      contentRef.current?.[newPage].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
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
                ref={arrowLeftRef}
                className={cx(classes.contentScroll, classes.contentScrollLeft)}
                onClick={(e) => {
                  e.preventDefault();
                  arrowClickHandler("left");
                }}
              >
                <Icon src="IcAngleLeft" width={16} height={16} />
              </div>
              <div
                ref={arrowRightRef}
                className={cx(
                  classes.contentScroll,
                  classes.contentScrollRight
                )}
                onClick={(e) => {
                  e.preventDefault();
                  arrowClickHandler("right");
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
