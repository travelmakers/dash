import { useRemainingTimer } from "@travelmakers/hooks";
import { PolymorphicRef, TmColor, useTmTheme } from "@travelmakers/styles";
import dayjs from "dayjs";
import { forwardRef } from "react";
import { Icon } from "../Icon";
import { View } from "../View";
import useStyles from "./Timer.style";
import { TimerComponent, TimerProps, TimerSize, TimerType } from "./Timer.type";

export interface Props {
  type: TimerType;
  size?: TimerSize;
  text: "string";
  time: dayjs.ConfigType;
  dateTime?: string;
}

const TIMER_ICON_SIZE: Record<TimerSize, number> = {
  small: 12,
  large: 16,
};

export const TIMER_COLOR: Record<TimerType, TmColor> = {
  navy: "primary1",
  white: "white",
};

export const Timer: TimerComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type,
      size = "small",
      text,
      time,
      dateTime,
      className,
      ...props
    }: TimerProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { colors } = useTmTheme();
    const { classes, cx } = useStyles({ type, size });
    const { remainingTime } = useRemainingTimer(time);

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <div className={classes.title}>
          <Icon
            src={"IcClock"}
            className={classes.icon}
            width={TIMER_ICON_SIZE[size]}
            height={TIMER_ICON_SIZE[size]}
            color={colors[TIMER_COLOR[type]]}
          />
          <strong className={classes.text}>{text}</strong>
        </div>
        <time className={classes.time} dateTime={dateTime}>
          {remainingTime}
        </time>
      </View>
    );
  }
);

Timer.displayName = "Timer";
