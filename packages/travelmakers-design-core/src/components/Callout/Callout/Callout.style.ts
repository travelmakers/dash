import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { spacing, radius, colors } = theme;

  return {
    root: {
      display: "flex",
      flexDirection: "column",
      rowGap: spacing.spacing10,
      margin: 0,
      padding: spacing.spacing30,
      borderRadius: radius.radius20,
      backgroundColor: colors.surface,
    },
  };
});
