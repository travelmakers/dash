import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./MainReviewCard.style";
import {
  MainReviewCardProps,
  MainReviewCardComponent,
} from "./MainReviewCard.type";
import { Image } from "../../Image";
import { Typography } from "../../Typography";

export interface Props {
  src: string;
  title: string;
  job: string;
  content: string;
}

export const MainReviewCard: MainReviewCardComponent & {
  displayName?: string;
} = forwardRef(
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
          <Image src={src} alt="" width={"100%"} height={"100%"} />
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
);

MainReviewCard.displayName = "MainReviewCard";
