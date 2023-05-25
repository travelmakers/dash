import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Button } from "../../Button";
import { Divider } from "../../Divider";
import { Icon } from "../../Icon";
import { Price, PriceProps } from "../../Price";
import { Tag } from "../../Tag";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./OptionCard.style";
import { OptionCardProps, ReturnType } from "./OptionCard.type";

export interface Props {
  isMore?: boolean;

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

  price: PriceProps<"div">;

  /** OptionCard 컴포넌트의 buttonName을 표시합니다. */
  buttonName?: string;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  isPrice?: boolean;
}

export const OptionCard = forwardRef(
  <C extends React.ElementType = "div">(
    {
      isMore = true,
      labels = [],
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
      onClick,
      className,
      ...props
    }: OptionCardProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

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
                style={{ marginBottom: 4 }}
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
                  ({minNight && `${minNight}박`} - {maxNight && `${maxNight}박`}
                  )
                </Typography>
              )}
            </div>
          </div>

          <div className={classes.groupBox}>
            <Typography level="subhead2" color="primary1">
              {headTitle}
            </Typography>
            <Divider type={"horizontal"} color={"primary"} />
            <Typography level="body2" color="primary3">
              {roomType}
            </Typography>
          </div>

          {benefitList.length > 0 && (
            <div className={classes.groupBox}>
              <div className={classes.titleBox}>
                <Typography level="subhead2" color="primary1">
                  {footerTitle}
                </Typography>
                {isMore && (
                  <Button
                    variant="text"
                    rightIcon={
                      <Icon src="IcAngleRight" width={16} height={16} />
                    }
                  >
                    더보기
                  </Button>
                )}
              </div>
              <Divider type={"horizontal"} color={"primary"} />
              <ul>
                {benefitList.map(({ content }) => {
                  return (
                    <Typography level="body2" color="primary1" component="li">
                      {content}
                    </Typography>
                  );
                })}
              </ul>
            </div>
          )}
          {price && (
            <>
              <Divider type={"horizontal"} color={"primary"} />
              {isPrice ? (
                <div className={classes.priceBox}>
                  <Price {...price} type="secondary" label="정가" />
                  <Price {...price} type="primary" />
                </div>
              ) : (
                <div className={classes.PriceNonBox}>
                  상세페이지에서 가격 확인
                </div>
              )}
            </>
          )}
        </div>

        <Button
          className={classes.submitButton}
          size={"medium"}
          fullWidth
          onClick={onClick}
        >
          {buttonName}
        </Button>
      </View>
    );
  }
) as unknown as ReturnType;

OptionCard.displayName = "OptionCard";
