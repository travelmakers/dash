import { createStyles } from "@travelmakers-design-v2/styles";
import { Props } from "./DateCell";

export default createStyles((theme, { type }: Pick<Props, "type">) => {
  return {
    container: {
      ...theme.typography.body2,
      textAlign: "center",
      cursor: "pointer",
      position: "relative",
      margin: "auto",
    },
    box: {
      display: "flex",
      alignItems: "center",
    },
    boxText: {
      width: 24,
      height: 24,
      borderRadius: theme.radius.radius100,
    },

    // NOTE: day에 대한 css
    strikeBox: {
      display: "flex",
      position: "absolute",
      alignItems: "center",
      top: "50%",
      left: 0,
      transform: "translate(0, -50%)",
    },
    strike: {
      display: type === "not-allowed" ? "block" : "none",
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

    // cell-type
    default: {},
    "default-between": {},
    "disabled-between": {},
    "to-between": {},
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
    disabled: {},
    "not-allowed": {
      color: theme.colors.primary3,
    },
    forbidden: {},

    // cell-background-type
    "background-default": {},
    "background-focus": {},
    "background-disabled": {},
    "background-not-allowed": {},
    "background-forbidden": {},
    "background-default-between": {
      backgroundColor: theme.colors.surface,
    },
    "background-disabled-between": {
      backgroundColor: theme.colors.surface,
    },
    "background-to-between": {
      backgroundColor: theme.colors.surface,
    },
    "background-from": {
      backgroundColor: theme.colors.surface,
      borderRadius: "100px 0px 0px 100px",
    },
    "background-to": {
      backgroundColor: theme.colors.surface,
      borderRadius: "100px 0px 0px 100px",
      transform: "matrix(-1, 0, 0, 1, 0, 0)",
      ["& > div > span"]: {
        transform: "matrix(-1, 0, 0, 1, 0, 0)",
      },
    },
  };
});
