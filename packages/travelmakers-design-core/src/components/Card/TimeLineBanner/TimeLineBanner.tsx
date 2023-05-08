import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef, PropsWithChildren } from "react";
import { View } from "../../View";
import useStyles from "./TimeLineBanner.style";
import {
  TimeLineBannerProps,
  TimeLineBannerComponent,
} from "./TimeLineBanner.type";
import { Typography } from "../../Typography";
import { Icon } from "../../Icon";

export interface Props {
  /** 해당 호텔에 대한 구매 상태를 의미합니다.
   * (구매전, 투어확정전, 투어확정, 투어완료, 결제진행중, 예약확정전, 체크인전, 입주n일차, 연장결제전, 연장확정전, 예약변경중, 체크아웃전, 체크아웃n일차, 체크아웃, 투어취소, 예약취소완료)
   */
  status: "default" | "alert";

  /** Title 텍스트를 지정한다. */
  title?: string;

  /** Message 텍스트를 지정한다. */
  message?: string;

  /** Label 텍스트를 지정한다. */
  label?: string;

  /** Label 우측에 표시되는 arrow 화살표 hidden 여부를 결정한다. */
  arrowHidden?: boolean;

  onClick?: () => void;
}

export const TimeLineBanner: TimeLineBannerComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      status,
      title = "&nbsp;",
      message = "&nbsp;",
      label = "&nbsp;",
      arrowHidden = false,
      onClick,
      className,
      children,
      ...props
    }: PropsWithChildren<TimeLineBannerProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ status, arrowHidden });

    return (
      <>
        <View<React.ElementType>
          component={"div"}
          ref={ref}
          className={cx(className, classes.root)}
          onClick={onClick}
          {...props}
        >
          <div className={cx(classes.titleWrapper)}>
            <Typography
              family="Pretendard"
              level="body2"
              color={"white"}
              className={cx(classes.textMaxLength)}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: message,
                }}
              />
            </Typography>
          </div>
          <div className={cx(classes.labelWrapper)}>
            <Typography
              className={cx(classes.labelText, classes.textMaxLength)}
              family="Pretendard"
              level="body1"
              color={"white"}
              strong
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: label,
                }}
              />
            </Typography>
            {!arrowHidden && (
              <Icon
                src="IcAngleRight"
                color="white"
                width={16}
                height={16}
                className={cx(classes.arrowImage)}
              />
            )}
          </div>
          <div className={cx(classes.imageOval)} />
        </View>
        {props.children}
      </>
    );
  }
);

TimeLineBanner.displayName = "TimeLineBanner";
