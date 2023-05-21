import { PolymorphicRef } from "@travelmakers/styles";
import { useArrowMove } from "@travelmakers/hooks";
import { Children, forwardRef, PropsWithChildren, useRef } from "react";
import { Icon } from "../Icon";
import { View } from "../View";
import useStyles from "./SwiperArrowContainer.style";
import {
  SwiperArrowContainerProps,
  ReturnType,
} from "./SwiperArrowContainer.type";

export interface Props {
  contentClassName: string;
  disabled?: boolean;
}

export const SwiperArrowContainer = forwardRef(
  <C extends React.ElementType = "div">(
    {
      className,
      contentClassName,
      disabled = false,
      children,
      ...props
    }: PropsWithChildren<SwiperArrowContainerProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const contentRef = useRef([]);
    const MAX_COUNT = Children.count(children);
    const {
      page,
      arrowLeftClickHandler,
      arrowRightClickHandler,
      setLeftArrowHover,
      setRightArrowHover,
      leftArrowHover,
      rightArrowHover,
    } = useArrowMove(contentRef, MAX_COUNT - 1);
    const { classes, cx } = useStyles({ leftArrowHover, rightArrowHover });

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(classes.container, className)}
        onMouseEnter={() => {
          page !== 0 && setLeftArrowHover(true);
          page < MAX_COUNT && setRightArrowHover(true);
        }}
        onMouseMove={() => {
          if (!disabled) {
            page !== 0 ? setLeftArrowHover(true) : setLeftArrowHover(false);
            page < MAX_COUNT
              ? setRightArrowHover(true)
              : setRightArrowHover(false);
          }
        }}
        onMouseLeave={() => {
          setLeftArrowHover(false);
          setRightArrowHover(false);
        }}
        {...props}
      >
        <div
          className={cx(classes.contentScroll, classes.contentScrollLeft)}
          onClick={(e) => {
            e.preventDefault();
            arrowLeftClickHandler();
          }}
        >
          <Icon src="IcAngleLeft" width={16} height={16} />
        </div>
        <div
          className={cx(classes.contentScroll, classes.contentScrollRight)}
          onClick={(e) => {
            e.preventDefault();
            arrowRightClickHandler();
          }}
        >
          <Icon src="IcAngleRight" width={16} height={16} />
        </div>
        <div className={cx(classes.contentScrollContainer, contentClassName)}>
          {children}
        </div>
      </View>
    );
  }
) as unknown as ReturnType;

SwiperArrowContainer.displayName = "SwiperArrowContainer";