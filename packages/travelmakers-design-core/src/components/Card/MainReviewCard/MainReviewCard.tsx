import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./MainReviewCard.style";
import { MainReviewCardProps, ReturnType } from "./MainReviewCard.type";

export interface Props {
  src: string;
  title: string;
  job: string;
  content: string;
}

export const MainReviewCard = forwardRef(
  <C extends React.ElementType = "div">(
    { src, title, job, content, className, ...props }: MainReviewCardProps<C>,
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
        <div className={cx(classes.imageContainer)}>
          <img src={src} alt="" width={92} height={122} loading="lazy" />
        </div>

        <div className={cx(classes.content)}>
          <div>
            <Typography level="body3" color="secondary1">
              {title}
            </Typography>
            <div
              style={{
                marginTop: "-5px",
              }}
            >
              <Typography level="body2" color="primary2">
                {job}
              </Typography>
            </div>
          </div>

          <div className={cx(classes.contentText)}>
            <Typography level="body2" color="primary1">
              {content}
            </Typography>
          </div>
        </div>
      </View>
    );
  }
) as unknown as ReturnType;

MainReviewCard.displayName = "MainReviewCard";
