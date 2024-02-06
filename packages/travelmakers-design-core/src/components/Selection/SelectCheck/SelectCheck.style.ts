import { CoTypography, createStyles, CSSObject } from "@travelmakers/styles";
import { Props } from "./SelectCheck";

const CHECK_ICON_SIZE: Record<Props["type"], CSSObject> = {
  small: {
    width: "16px",
    height: "16px",
    padding: "2px",
  },
  medium: {
    width: "24px",
    height: "24px",
    padding: "4px",
  },
};

const CHECK_ICON_LABEL_TYPOGRAPHY: Record<Props["type"], keyof CoTypography> = {
  small: "caption",
  medium: "body2",
};

const getTypography = (
  typography: CoTypography,
  type: Props["type"],
  typo: Props["typography"]
) => {
  if (!typo) return typography[CHECK_ICON_LABEL_TYPOGRAPHY[type]];

  return typography[typo];
};

const getRootStyle = (gap: Props["gap"]) => {
  switch (gap) {
    case "full":
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      };

    default:
      return {
        display: "inline-flex",
        alignItems: "center",
        columnGap: `${gap}px`,
      };
  }
};

export default createStyles(
  (
    theme,
    {
      type,
      gap,
      typography: _typography,
      fontWeight,
      isReverse,
      disabled,
    }: Pick<
      Props,
      "type" | "gap" | "typography" | "fontWeight" | "isReverse"
    > & { disabled: HTMLInputElement["disabled"] }
  ) => {
    const { colors, radius, typography } = theme;

    return {
      root: {
        ...getRootStyle(gap),
        flexDirection: !isReverse ? "row" : "row-reverse",
        height: "100%",
        cursor: disabled ? "default" : "pointer",

        ".tm-select-check__icon": {
          ...CHECK_ICON_SIZE[type],
          display: "flex",
          backgroundColor: colors.primaryContainer,
          borderRadius: radius.radius100,
        },
      },
      input: {
        "&:checked + .tm-select-check__icon": {
          backgroundColor: colors.primary,
        },

        "&:disabled + .tm-select-check__icon": {
          backgroundColor: colors.surfaceVariant,
        },
      },
      label: {
        ...getTypography(typography, type, _typography),
        color: colors.primary1,
        width: "fit-content",
        fontWeight,
      },
    };
  }
);
