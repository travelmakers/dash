import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { colors, spacing, typography } = theme;

  return {
    root: {
      listStyle: "none",
    },
    link: {
      display: "inline-block",
      width: "100%",
      padding: spacing.spacing30,
      ...typography.body2,
      color: colors.primary,
      textDecoration: "none",
      backgroundColor: colors.white,
    },
  };
});
