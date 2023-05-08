import { PolymorphicRef, useTmTheme } from "@travelmakers/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./CouponCard.style";
import { CouponCardProps, CouponCardComponent } from "./CouponCard.type";
import { Typography } from "../../Typography";
import { Icon } from "../../Icon";

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
}

export const CouponCard: CouponCardComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
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
      const firstText = item ?? "전체";
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
              적용중
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
          <Typography level="display2" color={"white"}>
            {day}
          </Typography>
          <Typography family="Noto Serif KR" level="body1" color={"white"}>
            {DAY_TYPE[type]}
          </Typography>
        </div>
        <div className={classes.rightBox}>
          <div className={classes.discountBox}>
            <div>
              <Typography level="display6" color="secondary">
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
            style={{ whiteSpace: "pre-line" }}
          >
            {content}
          </Typography>
        </div>
      </View>
    );
  }
);

CouponCard.displayName = "CouponCard";
