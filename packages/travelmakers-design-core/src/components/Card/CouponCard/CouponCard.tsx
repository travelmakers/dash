import { PolymorphicRef, useTmTheme } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Icon } from "../../Icon";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./CouponCard.style";
import { CouponCardProps, ReturnType } from "./CouponCard.type";

export interface Props {
  /** CouponCard의 Type을 설정합니다. */
  type: "week" | "month" | "all";

  /** CouponCard의 상태를 설정합니다. */
  state: "default" | "applied" | "checked";

  /** CouponCard의 day를 설정합니다. */
  day: number;

  /** CouponCard의 타이틀을 설정합니다. */
  title: string;

  /** CouponCard의 서브 타이틀을 설정합니다. */
  subTitle: string;

  /** CouponCard의 적용상품 설정합니다. */
  item?: string;

  /** CouponCard의 잔여수량을 설정합니다. */
  remainingQuantity?: number;

  /** CouponCard의 내용을 설정합니다. */
  content: string;

  locale?: "ko" | "en";
}

export const CouponCard = forwardRef(
  <C extends React.ElementType = "div">(
    {
      locale = "ko",
      type,
      state,
      day,
      title,
      subTitle,
      item,
      remainingQuantity,
      content,
      className,
      ...props
    }: CouponCardProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type });
    const theme = useTmTheme();
    const DAY_TYPE = {
      week: "Week",
      month: "Month",
      all: "All",
    };

    const getItemText = (
      item: Props["item"],
      remainingQuantity: Props["remainingQuantity"]
    ) => {
      const firstText = item ? item : locale === "ko" ? "전체" : "All";
      const secondText = ` | 잔여 ${remainingQuantity}개`;
      if (remainingQuantity) {
        return `${firstText} ${secondText}`;
      } else {
        return firstText;
      }
    };

    const getStateIcon = (state: Props["state"]) => {
      switch (state) {
        case "applied":
          return (
            <Typography level="body3" color="primary3">
              {locale === "ko" ? "적용중" : "applied"}
            </Typography>
          );

        case "checked":
          return (
            <div className={classes.checkBox}>
              <Icon
                src="IcCheck"
                width={12}
                height={12}
                color={theme.colors.white}
              />
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.container)}
        {...props}
      >
        <div className={classes.leftBox}>
          <Typography
            family="Noto Serif KR"
            level="display2"
            color={"white"}
            strong
          >
            {type === "all" ? "All" : day}
          </Typography>
          <Typography family="Noto Serif KR" level="body1" color={"white"}>
            {type !== "all" && DAY_TYPE[type]}
          </Typography>
        </div>
        <div className={classes.rightBox}>
          <div className={classes.discountBox}>
            <div>
              <Typography level="display6" color="secondary" strong>
                {title}
              </Typography>
            </div>
            <div>{getStateIcon(state)}</div>
          </div>
          <Typography level="body3" color="primary">
            {subTitle}
          </Typography>
          <Typography level="caption" color="errorInteract">
            {getItemText(item, remainingQuantity)}
          </Typography>
          <Typography
            level="caption"
            color="primary3"
            dangerouslySetInnerHTML={{ __html: content }}
          ></Typography>
        </div>
      </View>
    );
  }
) as unknown as ReturnType;

CouponCard.displayName = "CouponCard";
