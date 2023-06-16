import { createStyles } from "@travelmakers/styles";
import { Props } from "./DateCell";

export default createStyles(
  (theme, { type, visible }: Pick<Props, "type" | "visible">) => {
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

    const getIsNotAllowed = () => {
      if (
        type === "not-allowed" ||
        type === "not-allowed-to-between" ||
        type === "not-allowed-between"
      ) {
        return true;
      }
      return false;
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
        display: getIsNotAllowed() ? "flex" : "none",
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
      "disabled-between": {
        color: theme.colors.primary4,
      },
      "disabled-to-between": {
        color: theme.colors.primary4,
      },
      "not-allowed-between": {
        color: theme.colors.primary3,
      },
      "not-allowed-to-between": {
        color: theme.colors.primary3,
      },
      focus: {
        color: theme.colors.white,
        backgroundColor: theme.colors.secondary,
      },
      from: {
        color: theme.colors.white,
        backgroundColor: theme.colors.secondary,
      },
      to: {
        color: theme.colors.white,
        backgroundColor: theme.colors.secondary,
      },
      disabled: {
        color: theme.colors.primary4,
      },
      "not-allowed": {
        color: theme.colors.primary3,
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
    };
  }
);
