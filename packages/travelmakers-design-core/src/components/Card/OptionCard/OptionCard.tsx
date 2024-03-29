import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Button, ButtonProps } from "../../Button";
import { Divider } from "../../Divider";
import { Icon } from "../../Icon";
import { Price } from "../../Price";
import { Tag } from "../../Tag";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./OptionCard.style";
import {
  OptionCardPrice,
  OptionCardProps,
  ReturnType,
} from "./OptionCard.type";
import Link, { LinkProps } from "next/link";

export interface Props {
  isMore?: boolean;

  onMoreClick?: React.MouseEventHandler<HTMLButtonElement>;

  labels?: string[];

  /** OptionCard 컴포넌트의 상단 Title Name을 표시합니다. */
  headTitle: string;

  /** OptionCard 컴포넌트의 하단 Title Name을 표시합니다. */
  footerTitle: string;

  /** OptionCard 컴포넌트의 optionName을 표사합니다. */
  optionName: string;

  /** OptionCard 컴포넌트의 Duration 표시여부를 판단합니다. */
  isDuration?: boolean;

  /** OptionCard 컴포넌트의 최소 -박(night)을 표사합니다. */
  minNight?: number;

  /** OptionCard 컴포넌트의 최대 -박(night)을 표사합니다. */
  maxNight?: number;

  /** OptionCard 컴포넌트의 roomType을 표사합니다. */
  roomType?: string;

  /** OptionCard 컴포넌트의 benefitContent을 표사합니다. */
  benefitList: {
    content: string;
    only: boolean;
    order: number;
  }[];

  price?: OptionCardPrice;

  /** OptionCard 컴포넌트의 buttonName을 표시합니다. */
  buttonName?: string;

  isPrice?: boolean;

  buttonProps: ButtonProps<typeof Button>;

  href: LinkProps["href"];

  noneText?: string;

  locale?: "ko" | "en";
}

export const OptionCard = forwardRef(
  <C extends React.ElementType = "div">(
    {
      isMore = true,
      labels = [],
      locale = "ko",
      headTitle = "Room Type",
      footerTitle = "Benefit",
      optionName = "옵션 설명",
      isDuration = true,
      minNight,
      maxNight,
      roomType,
      benefitList = [],
      price,
      isPrice = true,
      buttonName = "예약하기",
      noneText = "상세페이지에서 가격 확인",
      onMoreClick,
      className,
      href,
      buttonProps,
      ...props
    }: OptionCardProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();
    const NIGHT = locale === "ko" ? "박" : "nights";

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.card)}
        {...props}
      >
        <div className={classes.container}>
          <div className={classes.headerGroup}>
            {labels.length > 0 && (
              <Tag
                type="fill"
                style={{ marginBottom: 8 }}
                size="medium"
                items={labels?.map((label, idx) => (
                  <Tag.Item key={idx} label={label} colorIdx={idx} />
                ))}
              />
            )}
            <div>
              <Typography level="display5" color="primary1" strong>
                {optionName}
              </Typography>
              {isDuration && (
                <Typography level="body2" color="onPrimaryContainer">
                  ({minNight && `${minNight}${NIGHT}`} -{" "}
                  {maxNight && `${maxNight}${NIGHT}`})
                </Typography>
              )}
            </div>
          </div>

          <div className={classes.groupBox}>
            <Typography
              level="subhead2"
              color="primary1"
              strong
              dangerouslySetInnerHTML={{ __html: headTitle }}
            />
            <Divider type={"horizontal"} color={"primary"} />
            <Typography
              level="body2"
              color="primary3"
              dangerouslySetInnerHTML={{ __html: roomType }}
            />
          </div>

          {benefitList.length > 0 && (
            <div className={classes.groupBox}>
              <div className={classes.titleBox}>
                <Typography
                  level="subhead2"
                  color="primary1"
                  strong
                  dangerouslySetInnerHTML={{ __html: footerTitle }}
                />
                {isMore && (
                  <Button
                    variant="text"
                    rightIcon={
                      <Icon src="IcAngleRight" width={16} height={16} />
                    }
                    onClick={onMoreClick}
                  >
                    {locale === "ko" ? "더보기" : "More"}
                  </Button>
                )}
              </div>
              <Divider type={"horizontal"} color={"primary"} className={classes.gap} />
              <ul className={classes.gap}>
                {benefitList.map(({ content }, idx) => {
                  return (
                    <Typography
                      key={`benefit-${idx}`}
                      level="body2"
                      color="primary1"
                      component="li"
                      dangerouslySetInnerHTML={{
                        __html: content?.replaceAll("\r\n", "<br/>"),
                      }}
                    />
                  );
                })}
              </ul>
            </div>
          )}
          {price && (
            <>
              <Divider type={"horizontal"} color={"primary"} className={classes.gap} />
              {isPrice ? (
                <div className={classes.priceBox}>
                  <Price
                    {...price}
                    locale={locale}
                    priceText={price.secondaryPriceText ?? price.priceText}
                    disabled={price.secondaryDisabled}
                    type="secondary"
                    couponType={undefined}
                  />
                  <Price {...price} locale={locale} type="primary" />
                </div>
              ) : (
                <div className={classes.PriceNonBox}>{noneText}</div>
              )}
            </>
          )}
        </div>

        <Button
          component={Link}
          href={href}
          className={classes.submitButton}
          size={"medium"}
          fullWidth
          {...buttonProps}
        >
          {buttonName}
        </Button>
      </View>
    );
  }
) as unknown as ReturnType;

OptionCard.displayName = "OptionCard";
