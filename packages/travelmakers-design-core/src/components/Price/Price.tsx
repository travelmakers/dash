import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { IconTag } from "../Tag";
import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./Price.style";
import { PriceProps, ReturnType } from "./Price.type";

export interface Props {
  /** Price 컴포넌트의 타입을 정합니다. */
  type?: "primary" | "secondary" | "tertiary";

  size?: "small" | "medium";

  /** (secondary type 한정) Price 컴포넌트의 레이블을 표시합니다. */
  label?: string;

  /** Price 컴포넌트의 할인율을 표시합니다. */
  percentText?: number;

  /** Price 컴포넌트의 가격을 표시합니다. */
  priceText?: number;

  /** Price 컴포넌트의 시작가격을 표시합니다. */
  priceStartText?: string;

  couponType?: "tag" | "text";

  disabled?: boolean;

  locale?: "ko" | "en";
}

export const Price = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type = "primary",
      size = "medium",
      locale = "ko",
      label,
      percentText,
      priceText,
      priceStartText,
      couponType,
      disabled = false,
      className,
      ...props
    }: PriceProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type });
    const KRW = locale === "ko" ? "원" : "₩";
    const PriceText = () => {
      if (locale === "ko") {
        return (
          <>
            <span
              className={cx(
                size === "medium" ? classes.priceText : classes.priceSmallText
              )}
            >
              {priceText?.toLocaleString("ko")}
            </span>
            <span
              className={cx(
                size === "medium"
                  ? classes.priceBeforeText
                  : classes.priceBeforeTextSmall
              )}
            >
              {KRW}~
            </span>
          </>
        );
      } else {
        return (
          <>
            <span
              className={cx(
                size === "medium"
                  ? classes.priceBeforeText
                  : classes.priceBeforeTextSmall
              )}
            >
              {KRW}{" "}
            </span>
            <div className={classes.priceTextBox}>
              <span
                className={cx(
                  size === "medium" ? classes.priceText : classes.priceSmallText
                )}
              >
                {priceText?.toLocaleString("ko")}
              </span>
              <span
                className={cx(
                  size === "medium"
                    ? classes.priceBeforeText
                    : classes.priceBeforeTextSmall
                )}
              >
                ~
              </span>
            </div>
          </>
        );
      }
    };

    const PriceTextTertiary = () => {
      if (locale === "ko") {
        return (
          <>
            <span
              className={cx(
                size === "medium" ? classes.priceText : classes.priceSmallText
              )}
            >
              {Math.floor(priceText / 10000).toLocaleString?.("ko")}

              <span
                className={cx(
                  size === "medium"
                    ? classes.priceBeforeText
                    : classes.priceBeforeTextSmall
                )}
              >
                만 원부터
              </span>
            </span>
          </>
        );
      } else {
        return (
          <>
            <span
              className={cx(
                size === "medium"
                  ? classes.priceBeforeText
                  : classes.priceBeforeTextSmall
              )}
            >
              {KRW}{" "}
            </span>
            <div className={classes.priceTextBox}>
              <span
                className={cx(
                  size === "medium" ? classes.priceText : classes.priceSmallText
                )}
              >
                {priceText?.toLocaleString("ko")}
              </span>
              <span
                className={cx(
                  size === "medium"
                    ? classes.priceBeforeText
                    : classes.priceBeforeTextSmall
                )}
              >
                ~
              </span>
            </div>
          </>
        );
      }
    };

    const Primary = () => {
      return (
        <View<React.ElementType>
          component={"div"}
          ref={ref}
          className={cx(classes.root, className)}
          {...props}
        >
          {percentText && (
            <span
              className={cx(
                size === "medium"
                  ? classes.percentText
                  : classes.percentSmallText
              )}
            >
              {percentText}%
            </span>
          )}
          {priceText && type === "primary" ? (
            <PriceText />
          ) : (
            priceText && <PriceTextTertiary />
          )}

          {priceStartText && (
            <span
              className={cx(
                size === "medium"
                  ? classes.priceStartText
                  : classes.priceStartTextSmall
              )}
            >
              {priceStartText}
            </span>
          )}
        </View>
      );
    };

    const Secondary = () => {
      return (
        <View<React.ElementType>
          component={"div"}
          ref={ref}
          className={cx(classes.root, className)}
          {...props}
        >
          {label && (
            <span
              className={cx(
                size === "medium"
                  ? classes.labelSecondary
                  : classes.labelSecondarySmall
              )}
            >
              {label}
            </span>
          )}
          {priceText && (
            <>
              <span
                className={cx(
                  size === "medium"
                    ? classes.priceSecondaryText
                    : classes.priceSecondaryTextSmall,
                  disabled && classes.priceSecondaryLineThrough
                )}
              >
                {locale === "ko" ? (
                  <>
                    {priceText?.toLocaleString("ko")}
                    {KRW}
                  </>
                ) : (
                  <>
                    {KRW} {priceText?.toLocaleString("ko")}
                  </>
                )}
              </span>
            </>
          )}
          {couponType === "tag" && (
            <IconTag
              label={locale == "ko" ? "쿠폰 적용가" : "Coupon"}
              type="fill"
            />
          )}
          {couponType === "text" && (
            <Typography color="secondary1" level="caption" strong>
              {locale === "ko"
                ? "적용 가능한 쿠폰이 있어요!"
                : "There's a coupon for you!"}
            </Typography>
          )}
        </View>
      );
    };

    return type === "primary" || type === "tertiary" ? (
      <Primary />
    ) : (
      <Secondary />
    );
  }
) as unknown as ReturnType;

Price.displayName = "Price";
