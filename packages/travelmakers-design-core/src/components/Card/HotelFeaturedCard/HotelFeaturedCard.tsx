import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, PropsWithChildren } from "react";
import useStyles from "./HotelFeaturedCard.style";
import {
  HotelFeaturedCardProps,
  HotelFeaturedCardComponent,
  HotelFeatureType,
} from "./HotelFeaturedCard.type";
import { View } from "../../View";
import { Price, PriceProps } from "../../Price";
import { Image } from "../../Image";
import { Tag } from "../../Tag";
import { Typography } from "../../Typography";
import { GradeBadge } from "../../Badge";
import Link from "next/link";

export interface Props {
  href: string;

  /** HotelFeatureCard 컴포넌트의 호텔타입을 정합니다. */
  type: HotelFeatureType["type"];

  /** HotelFeatureCard 컴포넌트의 호텔타입이 default일 경우 몇성호텔인지를 표시합니다. */
  star?: HotelFeatureType["star"];

  /** HotelFeatureCard 컴포넌트의 이미지를 표시합니다. */
  src?: string;

  /** HotelFeatureCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다. */
  labels?: string[];

  /** HotelFeatureCard 컴포넌트의 호텔명을 표시합니다. */
  name?: string;

  /** HotelFeatureCard 컴포넌트의 몇주살기에 대한 레이블을 표시합니다. */
  timelineTags?: string[];

  price: PriceProps<"div">;
}

export const HotelFeaturedCard: HotelFeaturedCardComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      href = "",
      type = "grade",
      star,
      src,
      labels = [],
      name,
      coupons,
      timelineTags,
      price,
      className,
      ...props
    }: PropsWithChildren<HotelFeaturedCardProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.container)}
        {...props}
      >
        <Link href={href}>
          <div className={cx(classes.cardBox)}>
            {/* SECTION: Image Section */}
            <div className={cx(classes.imageBox)}>
              <div className={cx(classes.imageLabel)}>
                <Tag type="fill" color="green">
                  {labels?.map((label) => (
                    <Tag.Item label={label} />
                  ))}
                </Tag>
              </div>
              <Image
                src={src}
                alt={`featureCard-${name}`}
                width={"100%"}
                height={"100%"}
              />
            </div>

            {/* SECTION: Content Section */}
            <div className={cx(classes.contentBox)}>
              <Tag type="line" color="gray" roundness="half">
                {timelineTags.map((timelineTag) => (
                  <Tag.Item label={timelineTag} />
                ))}
              </Tag>
              <div>
                <Typography level="body2" color={"black"}>
                  {name}
                </Typography>
                <div className={cx(classes.hotelInfo)}>
                  <GradeBadge grade={star} type={type} />
                </div>
              </div>
              <div className={cx(classes.divider)} />
              <div>
                <Price {...price} type="secondary" />
                <Price {...price} type="primary" />
              </div>
            </div>
          </div>
        </Link>
      </View>
    );
  }
);

HotelFeaturedCard.displayName = "HotelFeaturedCard";
