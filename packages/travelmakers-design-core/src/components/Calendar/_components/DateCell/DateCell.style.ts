import { createStyles } from "@travelmakers/styles";
import { Props } from "./DateCell";

export default createStyles(
  (
    theme,
    { day, checked, visible }: Pick<Props, "day" | "checked" | "visible">
  ) => {
    const getToBackgroundCssObject = () => {
      return {
        borderRadius: "100px 0px 0px 100px",
        transform: "matrix(-1, 0, 0, 1, 0, 0)",
        width: "45px",
        left: 0,
        ["& > div > span"]: {
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
        },
      };
    };
    const getBackgroundColor = () => {
      return {
        backgroundColor: theme.colors.surface,
      };
    };

    return {
      container: {
        ...theme.typography.body2,
        textAlign: "center",
        cursor: visible ? "pointer" : "default",
        position: "relative",
        margin: "auto",
        width: 48,
        height: 48,
      },
      calendar: {},
      box: {
        display: "inline-flex",
        alignItems: "center",

        ["& > span"]: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      },
      boxText: {
        width: 24,
        height: 24,
        borderRadius: theme.radius.radius100,
      },

      // NOTE: day에 대한 css
      strikeBox: {
        display: "none",
        position: "absolute",
        alignItems: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      strike: {
        display: "block",
        width: "25px",
        height: "1px",
        backgroundColor: theme.colors.primary3,
      },
      sunday: {
        color: theme.colors.error,
      },
      saturday: {
        color: theme.colors.tertiary,
      },

      // NOTE: cell-type
      disabled: {
        color: theme.colors.primary4,
      },

      focusDay: {
        color: theme.colors.white,
        backgroundColor: theme.colors.secondary,
      },

      betweenDaysBackground: {
        ...getBackgroundColor(),
      },

      // NOTE: cell-background-type
      background: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        top: "24%",
        width: "100%",
        height: "26px",
      },
      "background-from": {
        ...getBackgroundColor(),
        borderRadius: "100px 0px 0px 100px",
        width: "37px",
        right: -1,
      },
      "background-to": {
        ...getBackgroundColor(),
        ...getToBackgroundCssObject(),
      },
      betweenDays: {
        ...getBackgroundColor(),
      },

      "background-default-between": {
        ...getBackgroundColor(),
      },
      "background-disabled-between": {
        ...getBackgroundColor(),
      },
      "background-disabled-to-between": {
        ...getBackgroundColor(),
        ...getToBackgroundCssObject(),
      },
      "background-not-allowed-between": {
        ...getBackgroundColor(),
      },
      "background-not-allowed-to-between": {
        ...getBackgroundColor(),
        ...getToBackgroundCssObject(),
      },
      "background-to-between": {
        ...getBackgroundColor(),
        ...getToBackgroundCssObject(),
      },
    };
  }
);
