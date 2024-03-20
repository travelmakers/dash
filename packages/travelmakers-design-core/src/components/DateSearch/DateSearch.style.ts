import { createStyles, TmColor } from "@travelmakers/styles";
import { DateSearchType } from "./DateSearch.type";

const getFormBackgroundColor = (
  colors: Record<TmColor, string>,
  type: DateSearchType
) => {
  if (type === "fill") return colors.surface;
  if (type === "line") return colors.white;
};

const getFormBorderColor = (
  colors: Record<TmColor, string>,
  type: DateSearchType,
  isFocused: boolean
) => {
  if (type === "fill" && !isFocused) return colors.surface;

  return isFocused ? colors.primary : colors.outline;
};

export default createStyles(
  (
    theme,
    { type, isFocused }: { type: DateSearchType; isFocused: boolean }
  ) => {
    const { typography, colors, spacing, radius } = theme;

    return {
      form: {
        display: "flex",
        alignItems: "center",
        columnGap: spacing.spacing10,
        height: "48px",
        padding: `0 ${spacing.spacing30} 0 ${spacing.spacing50}`,
        borderRadius: radius.radius100,
        border: `1px solid ${getFormBorderColor(colors, type, isFocused)}`,
        overflow: "hidden",
        backgroundColor: getFormBackgroundColor(colors, type),
      },
      disabled: {
        borderColor: colors.outline,
      },
      input: {
        ...typography.body2,
        padding: 0,
        color: colors.primary2,
        border: 0,
        outline: 0,
        flexGrow: 1,
        backgroundColor: "transparent",

        ["&:focus"]: {
          color: colors.primary1,
        },

        ["&::placeholder"]: {
          color: colors.primary3,
        },

        ["&:disabled::placeholder"]: {
          color: colors.primary4,
        },

        // NOTE: For WebKit-based browsers (Chrome, Safari, etc.)
        ["&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration"]:
          {
            display: "none",
          },

        // NOTE: For Mozilla Firefox
        ["&::-moz-search-clear-button, &::-moz-search-back-button"]: {
          display: "none",
        },

        // NOTE: For Microsoft Edge
        ["&::-ms-clear,&::-ms-back"]: {
          display: "none",
        },
      },
      reset: {
        display: "flex",
        padding: 0,
        backgroundColor: "transparent",
        border: 0,
        outline: 0,
        cursor: "pointer",
      },
    };
  }
);
