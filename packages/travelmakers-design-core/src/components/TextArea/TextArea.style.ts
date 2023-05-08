import { createStyles } from "@travelmakers/styles";

export default createStyles((theme, { isFilled }: { isFilled: string }) => {
  const { spacing, typography, colors, radius } = theme;

  return {
    root: {
      display: "flex",
      flexDirection: "column",
      rowGap: spacing.spacing5,
    },
    label: { ...typography.body2, color: colors.primary },
    textArea: {
      ...typography.body2,
      minWidth: "328px",
      minHeight: "76px",
      padding: `${spacing.spacing10} ${spacing.spacing30}`,
      color: colors.primary2,
      border: `1px solid ${isFilled ? colors.primary3 : colors.outline}`,
      borderRadius: radius.radius20,
      outline: 0,
      resize: "none",

      ["&::placeholder"]: {
        color: colors.primary3,
      },

      ["&:focus"]: {
        color: colors.primary1,
        borderColor: colors.primary,
      },

      ["&:disabled"]: {
        color: colors.primary3,
        borderColor: colors.outline,
        backgroundColor: colors.surface,

        ["&::placeholder"]: {
          color: colors.primary4,
        },
      },
    },
    feedback: { ...typography.body3, color: colors.primary3, fontWeight: 400 },
  };
});
