import { TmFontSizes, createStyles } from "@travelmakers-design-v2/styles";
import { Props, TIMER_COLOR } from "./Timer";
import { TimerSize } from "./Timer.type";

const TIMER_TEXT_FONT: Record<TimerSize, TmFontSizes> = {
  small: "body3",
  large: "body2",
};

const TIMER_TIME_FONT: Record<TimerSize, TmFontSizes> = {
  small: "body3",
  large: "subhead2",
};

export default createStyles(
  (theme, { type, size }: Pick<Props, "type" | "size">) => {
    const { colors, typography, spacing } = theme;

    return {
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: colors[TIMER_COLOR[type]],
      },
      title: {
        display: "flex",
        alignItems: "center",
      },
      icon: {
        marginRight: spacing.spacing5,
      },
      text: {
        ...typography[TIMER_TEXT_FONT[size]],
        fontWeight: 400,
      },
      time: {
        ...typography[TIMER_TIME_FONT[size]],
        fontWeight: 700,
      },
    };
  }
);
