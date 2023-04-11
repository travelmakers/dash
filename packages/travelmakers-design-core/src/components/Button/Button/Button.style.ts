import { createStyles } from "@travelmakers-design-v2/styles";
import { TM_HEIGHTS } from "../../../constants";
import { Props } from "./Button";

export default createStyles(
  (theme, { size, variant, fullWidth, roundness }: Props) => {
    const { radius, spacing, colors, palettes, shadows } = theme;
    const isLineType = variant === "secondary";
    const isNonBoxShadow = variant === "text";

    return {
      root: {
        width: fullWidth && "100%",
        height: TM_HEIGHTS[size],
        padding: `0 ${spacing.spacing50}`,
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
