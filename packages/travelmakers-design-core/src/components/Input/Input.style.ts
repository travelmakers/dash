import { TmColor, createStyles } from "@travelmakers-design-v2/styles";
import { Props } from "./Input";

const getBorderColor = (
  colors: Record<TmColor, string>,
  isError: Props["isError"],
  color: string
) => (isError ? colors.error : color);

const getStatusStyle = (
  colors: Record<TmColor, string>,
  isError: Props["isError"],
  defaultColor?: string
) => {
  if (isError === false) return colors.secondary1;
  if (isError === true) return colors.error;
  return defaultColor ?? "";
};

export default createStyles(
  (
    theme,
    { subfix, isError }: { subfix?: Props["subfix"]; isError: Props["isError"] }
  ) => {
    const { typography, colors, spacing, radius } = theme;

    return {
      root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: spacing.spacing5,
      },
      focus: {
        border: `1px solid ${getBorderColor(colors, isError, colors.primary)}`,
      },
      disabled: {
        backgroundColor: colors.surface,
        userSelect: "none",
      },
      container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: "328px",
        minHeight: "44px",
        padding: `0 ${spacing.spacing30}`,
        border: `1px solid ${getBorderColor(colors, isError, colors.outline)}`,
        borderRadius: radius.radius20,
        overflow: "hidden",
      },
      input: {
        ...typography.body2,
        padding: 0,
        color: colors.primary2,
        border: 0,
        outline: 0,
        width: subfix ? "100%" : "auto",

        ["&::placeholder"]: {
          color: colors.primary3,
        },

        ["&:focus"]: {
          color: colors.primary1,
          borderColor: getBorderColor(colors, isError, colors.primary),
        },

        ["&:disabled"]: {
          color: colors.primary3,
          backgroundColor: colors.surface,

          ["&::placeholder"]: {
            color: colors.primary4,
          },
        },
      },
      label: { ...typography.body2, color: colors.primary1 },
      subfix: {
        ...typography.body2,
        paddingLeft: spacing.spacing30,
        color: getStatusStyle(colors, isError, colors.primary3),
        flexShrink: 0,
      },
      feedback: {
        ...typography.body3,
        color: getStatusStyle(colors, isError, colors.primary3),
        fontWeight: 400,
      },
    };
  }
);
