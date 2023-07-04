import { PolymorphicRef } from "@travelmakers/styles";
import Link, { LinkProps } from "next/link";
import React, { forwardRef } from "react";
import { Divider } from "../../Divider";
import { Icon } from "../../Icon";
import { Tag } from "../../Tag";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./HotelReviewCard.style";
import { HotelReviewCardProps, ReturnType } from "./HotelReviewCard.type";

export interface Props {
  href: LinkProps["href"];
  src?: string;
  /** HotelFeatureCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다. */
  labels?: string[];

  contents: string;

  writer: string;

  product: string;

  notLink?: boolean;
}

export const HotelReviewCard = forwardRef(
  <C extends React.ElementType = "div">(
    {
      href = "",
      src,
      labels = [],
      contents,
      writer,
      product,
      notLink = false,
      className,
      ...props
    }: HotelReviewCardProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    const Component = () => {
      return (
        <div className={classes.contentContainer}>
          <div className={classes.headerBox}>
            <Typography level="body3" color="primary3">
              이런 점이 좋았어요.
            </Typography>
            <Icon src="IcAngleRight" width={16} height={16} />
          </div>
          {labels.length > 0 && (
            <Tag
              type="fill"
              roundness="half"
              color="gray"
              size="medium"
              gap={4}
              items={labels?.map((label, idx) => (
                <Tag.Item key={idx} label={label} />
              ))}
            />
          )}
          <div className={classes.contentBox}>
            <Typography level="body2" color="primary1">
              {contents}
            </Typography>
            {src && (
              <img src={src} alt="hotel-review-card" width={40} height={40} />
            )}
          </div>
          <Divider type={"horizontal"} color={"outline"} />
          <div className={classes.footerBox}>
            <Typography level="body3" color="primary1">
              {writer}
            </Typography>
            <Typography level="body3" color="primary3">
              {product}
            </Typography>
          </div>
        </div>
      );
    };

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.container)}
        {...props}
      >
        {notLink ? (
          <Component />
        ) : (
          <Link href={href}>
            <Component />
          </Link>
        )}
      </View>
    );
  }
) as unknown as ReturnType;

HotelReviewCard.displayName = "HotelReviewCard";
