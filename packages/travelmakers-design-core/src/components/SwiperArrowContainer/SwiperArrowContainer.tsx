import { PolymorphicRef, TmColor } from "@travelmakers/styles";
import { Navigation } from "swiper";
import {
  Children,
  forwardRef,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import { Icon } from "../Icon";
import useStyles from "./SwiperArrowContainer.style";
import { Swiper, SwiperProps } from "swiper/react";

import {
  SwiperArrowContainerProps,
  ReturnType,
} from "./SwiperArrowContainer.type";
import React from "react";
import { View } from "../View";
import { useArrowMove } from "@travelmakers/hooks";

export interface Props extends SwiperProps {
  hasNavigation?: boolean;
  hasDimmer?: boolean;
  dimmerColor?: TmColor;
  disabled?: boolean;
}

export const SwiperArrowContainer = forwardRef(
  <C extends React.ElementType = "div">(
    {
      className,
      hasNavigation = false,
      modules = [],
      hasDimmer = false,
      disabled = false,
      dimmerColor,
      children,
      ...props
    }: PropsWithChildren<SwiperArrowContainerProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const defaultOption: Pick<SwiperProps, "slidesPerView" | "grabCursor"> = {
      slidesPerView: "auto",
      grabCursor: true,
    };
    const MAX_COUNT = Children.count(children) - 1;
    const contentRef = useRef();
    const {
      setLeftArrowHover,
      setRightArrowHover,
      leftArrowHover,
      rightArrowHover,
    } = useArrowMove(contentRef, MAX_COUNT);
    const [isEnd, setIsEnd] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);

    const option = { ...defaultOption, ...props };

    if (!hasNavigation) {
      return (
        <Swiper modules={modules} {...option}>
          {children}
        </Swiper>
      );
    }

    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    const { classes, cx } = useStyles({
      leftArrowHover,
      rightArrowHover,
      hasDimmer,
      dimmerColor,
      isEnd,
    });

    return (
      <View<React.ElementType>
        component={"div"}
        ref={contentRef}
        className={cx(className, classes.container)}
        onMouseEnter={() => {
          if (MAX_COUNT >= 2) {
            setLeftArrowHover(!isBeginning);
            setRightArrowHover(!isEnd);
          }
        }}
        onMouseLeave={() => {
          setLeftArrowHover(false);
          setRightArrowHover(false);
        }}
      >
        <Swiper
          navigation={{ prevEl, nextEl }}
          modules={[Navigation, ...modules]}
          onSlideChange={(swiper) => {
            if (swiper.isBeginning) {
              setLeftArrowHover(false);
              setIsEnd(false);
              setIsBeginning(true);
            } else if (swiper.isEnd && !props.loop) {
              setRightArrowHover(false);
              setIsEnd(true);
              setIsBeginning(false);
            } else {
              setLeftArrowHover(true);
              setRightArrowHover(true);
              setIsEnd(false);
              setIsBeginning(false);
            }
          }}
          {...option}
        >
          <div
            className={cx(classes.contentScroll, classes.contentScrollLeft)}
            ref={setPrevEl}
          >
            <Icon src="IcAngleLeft" width={16} height={16} />
          </div>
          <div
            className={cx(classes.contentScroll, classes.contentScrollRight)}
            ref={setNextEl}
          >
            <Icon src="IcAngleRight" width={16} height={16} />
          </div>
          <div className={cx(classes.contentDimmer)} />
          {children}
        </Swiper>
      </View>
    );
  }
) as unknown as ReturnType;

SwiperArrowContainer.displayName = "SwiperArrowContainer";
