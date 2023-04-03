import { createStyles } from "@travelmakers-design-v2/styles";
import { TM_HEIGHTS } from "../../../constants";
import { Props } from "./Button";

const sizes = {
  small: {
    height: TM_HEIGHTS.small,
    padding: "0 24px",
  },

  medium: {
    height: TM_HEIGHTS.medium,
    padding: "0 24px",
  },

  large: {
    height: TM_HEIGHTS.large,
    padding: "0 24px",
  },
};

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? "block" : "inline-block",
  width: fullWidth ? "100%" : "auto",
});

/** style에서 사용할 Props Type을 선언합니다.
 * ex)
 *		export default createStyles((theme, { type }: Pick<Props, "prop">) => {
 *			// writhing styles
 *		}
 * */
export default createStyles(
  (theme, { size, variant, fullWidth, roundness }: Props) => {
    const isLineType = variant === "secondary";
    const isNonBoxShadow = variant === "text";
    return {
      root: {
        ...sizes[size],
        ...getWidthStyles(fullWidth),
        borderRadius: roundness
          ? theme.radius.radius100
          : theme.radius.radius20,
        cursor: "pointer",
      },
      inner: {
        display: "flex",
        gap: theme.spacing.spacing10,
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
        color: theme.palettes[variant][5],
        backgroundColor: theme.palettes[variant][0],
        border: isLineType ? `1px solid ${theme.colors.primary}` : "none",
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
            color: theme.palettes[variant][4],
            boxShadow: isNonBoxShadow
              ? "none"
              : "0px 4px 8px rgba(0, 0, 0, 0.15)",
          },

          "&:active": {
            color: theme.palettes[variant][4],
            backgroundColor: theme.palettes[variant][1],
            boxShadow: "none !important",
          },
        },

        [`&:disabled`]: {
          backgroundColor: theme.palettes[variant][2],
          border: isLineType
            ? `1px solid ${theme.palettes[variant][3]}`
            : "none",
          color: theme.palettes[variant][3],
          cursor: "auto",
        },
      },
    };
  }
);
