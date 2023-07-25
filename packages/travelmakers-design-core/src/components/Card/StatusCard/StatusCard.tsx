import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, PropsWithChildren } from "react";
import { Icon } from "../../Icon";
import { Typography } from "../../Typography";
import { View } from "../../View";
import useStyles from "./StatusCard.style";
import { ReturnType, StatusCardProps } from "./StatusCard.type";

export interface Props {
  /** Title 텍스트를 지정한다. */
  title: string;

  titleDisable?: boolean;

  /**  */
  hotelImage?: string;

  /** Message 텍스트를 지정한다. */
  message: string;

  messageDisable?: boolean;

  messageUnderline?: boolean;

  messageClick?: () => void;

  /** Label 텍스트를 지정한다. */
  label: string;

  roomType: string;

  onClick?: () => void;

  isArrow?: boolean;

  isLabel?: boolean;
}

export const StatusCard = forwardRef(
  <C extends React.ElementType = "div">(
    {
      hotelImage,
      title,
      titleDisable = false,
      message,
      messageDisable = false,
      messageUnderline = false,
      messageClick,
      label,
      roomType,
      onClick,
      isArrow = true,
      isLabel = true,
      className,
      children,
      ...props
    }: PropsWithChildren<StatusCardProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({
      isArrow,
      isLabel,
    });

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.root)}
      >
        <div className={cx(classes.container)} onClick={onClick} {...props}>
          <img
            src={hotelImage}
            className={cx(classes.image)}
            alt={`${title} | ${roomType}`}
            width={98}
            height={98}
          />
          <View className={cx(classes.textContainer)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                family="Pretendard"
                level="body2"
                color={titleDisable ? "tertiary30" : "primary1"}
                strong
              >
                {title}
              </Typography>
              <Typography
                family="Pretendard"
                level="body3"
                color={messageDisable ? "tertiary30" : "primary1"}
                style={{
                  textDecorationLine: messageUnderline ? "underline" : "none",
                  cursor: messageUnderline && "pointer",
                  width: "fit-content",
                }}
                onClick={(e) => {
                  if (!!messageClick) {
                    e.stopPropagation();
                    messageClick();
                  }
                }}
                strong
              >
                {message}
              </Typography>
            </div>
            {isLabel && (
              <Typography
                family="Pretendard"
                level="body3"
                color={"primary1"}
                className={cx(classes.description, classes.textBreak)}
              >
                {label}
              </Typography>
            )}
            <View
              className={cx(
                classes.flex,
                classes.spaceBetween,
                classes.footerWrapper
              )}
            >
              <Typography
                family="Pretendard"
                level="body3"
                color={"primary1"}
                className={cx(classes.textRoomBreak)}
              >
                {roomType}
              </Typography>
              {isArrow ? (
                <Icon src="IcAngleRight" width={16} height={16} />
              ) : (
                <></>
              )}
            </View>
          </View>
        </div>
        {props.children}
      </View>
    );
  }
) as unknown as ReturnType;

StatusCard.displayName = "StatusCard";
