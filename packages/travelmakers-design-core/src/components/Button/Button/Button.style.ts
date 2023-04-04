import { createStyles } from "@travelmakers-design-v2/styles";
import { TM_HEIGHTS } from "../../../constants";
import { Props } from "./Button";

export default createStyles(
  (theme, { size, variant, fullWidth, roundness }: Props) => {
    const { radius, spacing, colors, palettes } = theme;
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
            boxShadow: isNonBoxShadow
              ? "none"
              : "0px 4px 8px rgba(0, 0, 0, 0.15)",
            filter: isNonBoxShadow
              ? "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15))"
              : "none",
          },

          "&:focus-visible": {
            color: palettes[variant][4],
            boxShadow: isNonBoxShadow
              ? "none"
              : "0px 4px 8px rgba(0, 0, 0, 0.15)",
          },

          "&:active": {
            color: palettes[variant][4],
            backgroundColor: palettes[variant][1],
            boxShadow: "none !important",
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
