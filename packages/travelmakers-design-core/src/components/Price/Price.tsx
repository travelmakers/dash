import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Icon } from "../Icon";
import { View } from "../View";
import useStyles from "./Price.style";
import { PriceComponent, PriceProps } from "./Price.type";

export interface Props {
  /** Price 컴포넌트의 타입을 정합니다. */
  type?: "primary" | "secondary";

  /** (secondary type 한정) Price 컴포넌트의 레이블을 표시합니다. */
  label?: string;

  /** Price 컴포넌트의 할인율을 표시합니다. */
  percentText?: number;

  /** Price 컴포넌트의 1박을 표시합니다. */
  nightText?: number;

  /** Price 컴포넌트의 가격을 표시합니다. */
  priceText?: number;

  /** Price 컴포넌트의 시작가격을 표시합니다. */
  priceStartText?: string;

  /** (secondary type 한정) Price 컴포넌트의 쿠폰 표시여부를 결정합니다. */
  isCoupon?: boolean;
}

export const Price: PriceComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type = "primary",
      label,
      percentText,
      nightText,
      priceText,
      priceStartText,
      isCoupon = true,
      className,
      ...props
    }: PriceProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type });

    const Primary = () => {
      return (
        <View<React.ElementType>
          component={"div"}
          ref={ref}
          className={cx(classes.root, className)}
          {...props}
        >
          {percentText && (
            <span className={cx(classes.percentText)}>{percentText}%</span>
          )}
          {nightText && (
            <span className={cx(classes.nightText)}>{nightText}박</span>
          )}
          {priceText && (
            <>
              <span className={cx(classes.priceText)}>
                {priceText.toLocaleString("ko")}
              </span>
              <span className={cx(classes.priceBeforeText)}>원~</span>
            </>
          )}
          {priceStartText && (
            <span className={cx(classes.priceStartText)}>
              | {priceStartText}
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
          {label && <span className={cx(classes.labelSecondary)}>{label}</span>}
          {nightText && (
            <span className={cx(classes.nightSecondaryText)}>
              {nightText}박
            </span>
          )}
          {priceText && (
            <>
              <span className={cx(classes.priceSecondaryText)}>
                {priceText?.toLocaleString("ko")}
              </span>
              <span className={cx(classes.priceBeforeSecondaryText)}>원</span>
            </>
          )}
          {isCoupon && (
            <div className={cx(classes.couponWrap)}>
              <Icon
                src="IcDiscount"
                width={16}
                height={16}
                style={{ margin: "0 4px" }}
              />
              <span className={cx(classes.couponWord)}>쿠폰 적용가</span>
            </div>
          )}
        </View>
      );
    };

    return type === "primary" ? <Primary /> : <Secondary />;
  }
);

Price.displayName = "Price";
