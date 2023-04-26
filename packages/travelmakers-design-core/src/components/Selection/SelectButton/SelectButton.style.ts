import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { typography, colors, spacing } = theme;

  return {
    root: {
      display: "flex",
      flexDirection: "column",
      rowGap: spacing.spacing5,
      border: 0,
    },
    legend: {
      ...typography.body2,
      color: colors.primary1,
    },
    wrapper: { display: "flex" },
    feedback: { ...typography.body3, color: colors.primary3, fontWeight: 400 },
  };
});
