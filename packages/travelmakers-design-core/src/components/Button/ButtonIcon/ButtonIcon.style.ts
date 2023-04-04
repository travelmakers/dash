import { createStyles } from "@travelmakers-design-v2/styles";
import { Props } from "./ButtonIcon";

const sizes = {
  small: {
    width: "24px",
    height: "24px",
    ["& > svg"]: {
      width: "12px",
    },
  },

  medium: {
    width: "32px",
    height: "32px",
    ["& > svg"]: {
      width: "16px",
    },
  },
};

export default createStyles(
  (
    theme,
    {
      size,
      variant,
      buttonTheme,
    }: Pick<Props, "size" | "variant" | "buttonTheme">
  ) => {
    const getBackgroundColor = (type: "default" | "active" | "disabled") => {
      switch (type) {
        case "active":
          return getActiveBackgroundColor();
        case "disabled":
          return getDisabledBackgroundColor();
        default:
          return getDefaultBackgroundColor();
      }
    };

    const getDefaultBackgroundColor = () => {
      if (variant === "secondary") {
        return {
          backgroundColor: theme.colors.transparent,
          border: `1px solid ${
            buttonTheme === "light" ? theme.colors.white : theme.colors.primary
          }`,
        };
      } else if (buttonTheme === "dark") {
        return { backgroundColor: theme.colors.primary, border: "none" };
      } else {
        return { backgroundColor: theme.colors.white, border: "none" };
      }
    };
    const getActiveBackgroundColor = () => {
      if (variant === "secondary") {
        return {
          backgroundColor: theme.colors.transparent,
          border: `1px solid ${
            buttonTheme === "light"
              ? theme.colors.surface
              : theme.colors.primaryInteract
          }`,
        };
      } else if (buttonTheme === "dark") {
        return { backgroundColor: theme.colors.primaryInteract };
      } else {
        return { backgroundColor: theme.colors.surface };
      }
    };
    const getDisabledBackgroundColor = () => {
      if (variant === "secondary") {
        return {
          backgroundColor: theme.colors.transparent,
          border: `1px solid ${theme.colors.primaryContainer}`,
        };
      } else if (buttonTheme === "dark") {
        return { backgroundColor: theme.colors.primaryContainer };
      } else {
        return { backgroundColor: theme.colors.primaryContainer };
      }
    };
    return {
      button: {
        ...sizes[size],
        borderRadius: theme.spacing.spacing100,
        ...getBackgroundColor("default"),
        cursor: "pointer",

        [":not(:disabled)"]: {
          "&:hover": {
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
          },
          "&:focus-visible": {
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
          },
          "&:active": {
            ...getBackgroundColor("active"),
            boxShadow: "none !important",
          },
        },
        [`&:disabled`]: {
          ...getBackgroundColor("disabled"),
          cursor: "auto",
        },
      },
    };
  }
);
