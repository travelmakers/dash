import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, PropsWithChildren } from "react";
import { View } from "../../View";
import useStyles from "./SkeletonTimeLineBanner.style";
import {
  SkeletonTimeLineBannerProps,
  SkeletonTimeLineBannerComponent,
} from "./SkeletonTimeLineBanner.type";
import { Typography } from "../..//Typography";

export interface Props {
  // 컴포넌트 내에서 사용할 props 타입 정의
}

export const SkeletonTimeLineBanner: SkeletonTimeLineBannerComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      onClick,
      className,
      children,
      ...props
    }: PropsWithChildren<SkeletonTimeLineBannerProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <>
        <View<React.ElementType>
          component={"div"}
          ref={ref}
          className={cx(className, classes.root)}
          {...props}
        >
          <div className={cx(classes.titleWrapper)}>
            <Typography
              family="Pretendard"
              level="body2"
              color={"white"}
              className={cx(classes.titleWrapper)}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: "&nbsp;",
                }}
                style={{
                  backgroundColor: "rgba(200, 200, 200, 0.5)",
                  width: "20%",
                  borderRadius: 8,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: "&nbsp;",
                }}
                style={{
                  backgroundColor: "rgba(200, 200, 200, 0.5)",
                  marginTop: 2,
                  borderRadius: 8,
                }}
              />
            </Typography>
          </div>
          <div className={cx(classes.labelWrapper)} onClick={onClick}>
            <Typography
              className={cx(classes.labelText)}
              family="Pretendard"
              level="body1"
              color={"white"}
              strong
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: "&nbsp;",
                }}
                style={{
                  backgroundColor: "rgba(200, 200, 200, 0.5)",
                  width: "100px",
                  borderRadius: 8,
                }}
              />
            </Typography>
          </div>
          <div className={cx(classes.imageOval)} />
        </View>
        {children}
      </>
    );
  }
);

SkeletonTimeLineBanner.displayName = "SkeletonTimeLineBanner";
