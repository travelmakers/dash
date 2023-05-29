import { PolymorphicRef, TmColor } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Tag } from "../../Tag";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./PriceCard.style";
import { PriceCardProps, ReturnType, StatusType } from "./PriceCard.type";

export interface Props {
  /** Hotel 타입을 정합니다. */
  status: StatusType;

  /** PriceCard 컴포넌트의 상품명을 입력합니다. */
  name: string;

  /** PriceCard 컴포넌트의 자세한 설명을 입력합니다. */
  description: string;

  /** PriceCard 컴포넌트의 레이블을 표시합니다. */
  tag?: string | null;
}

export const PriceCard = forwardRef(
  <C extends React.ElementType = "div">(
    { status, name, description, tag, className, ...props }: PriceCardProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();
    const STATUS_COLOR: {
      active: TmColor;
      disabled: TmColor;
    } = { active: "primary1", disabled: "primary4" };

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.container)}
        {...props}
      >
        <Typography level="body2" color={STATUS_COLOR[status]} strong>
          {name}
        </Typography>
        <br />
        <Typography level="body3" color={STATUS_COLOR[status]} strong>
          {description}
        </Typography>
        <br />
        {status === "active" && tag && (
          <Tag
            type="fill"
            color="gray"
            roundness="half"
            items={[<Tag.Item key={tag} label={tag} />]}
          />
        )}
      </View>
    );
  }
) as unknown as ReturnType;

PriceCard.displayName = "PriceCard";
