import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { spacing, colors, radius } = theme;

  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      columnGap: spacing.spacing5,
      margin: 0,
      padding: spacing.spacing5,
      border: 0,
      backgroundColor: colors.primary,
      borderRadius: radius.radius100,
    },
  };
});
