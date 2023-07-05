import { TmTheme, createStyles, TmSize } from "@travelmakers/styles";
import { TM_HEIGHTS } from "../../../constants";
import { Props } from "./Button";
import { ButtonType } from "./Button.type";

const getButtonPadding = (
  spacing: TmTheme["spacing"],
  buttonType: ButtonType,
  size: TmSize
) => {
  const topBottomPadding =
    size === "small"
      ? 0
      : size === "medium"
      ? spacing.spacing10
      : spacing.spacing20;

  switch (buttonType) {
    case "leftIcon":
      return `${topBottomPadding} ${spacing.spacing50} ${topBottomPadding} ${spacing.spacing30}`;
    case "rightIcon":
      return `${topBottomPadding} ${spacing.spacing30} ${topBottomPadding} ${spacing.spacing50}`;
    default:
      return `${topBottomPadding} ${spacing.spacing50}`;
  }
};

export default createStyles(
  (
    theme,
    {
      size,
      variant,
      fullWidth,
      roundness,
      buttonType,
    }: Props & { buttonType: ButtonType }
  ) => {
    const { radius, spacing, colors, palettes, shadows } = theme;
    const isLineType = variant === "secondary";
    const isNonBoxShadow = variant === "text";

    return {
      root: {
        width: fullWidth && "100%",
        height: TM_HEIGHTS[size],
        padding: isNonBoxShadow
          ? 0
          : getButtonPadding(spacing, buttonType, size),
        borderRadius: roundness ? radius.radius100 : radius.radius20,
        cursor: "pointer",
      },
      inner: {
        display: "flex",
        gap: spacing.spacing10,
        alignItems: "center",
        justifyContent: "center",
      },
      icon: {
        display: "flex",
        alignItems: "center",
      },
      label: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      },
      disabled: {
        pointerEvents: "none",
        cursor: "default",
        backgroundColor: palettes[variant][2],
        border: isLineType ? `1px solid ${palettes[variant][3]}` : "none",
        color: palettes[variant][3],
      },
      solid: {
        color: palettes[variant][5],
        backgroundColor: palettes[variant][0],
        border: isLineType ? `1px solid ${colors.primary}` : "none",
        [":not(:disabled)"]: {
          "&:hover": {
            boxShadow: isNonBoxShadow ? shadows.none : shadows.elevation1,
            filter: isNonBoxShadow
              ? `drop-shadow(${shadows.elevation1})`
              : shadows.none,
          },

          "&:focus-visible": {
            color: palettes[variant][4],
            boxShadow: isNonBoxShadow ? shadows.none : shadows.elevation1,
          },

          "&:active": {
            color: palettes[variant][4],
            backgroundColor: palettes[variant][1],
            boxShadow: `${shadows.none} !important`,
          },
        },

        [`&:disabled`]: {
          backgroundColor: palettes[variant][2],
          border: isLineType ? `1px solid ${palettes[variant][3]}` : "none",
          color: palettes[variant][3],
          cursor: "auto",
        },
      },
    };
  }
);
