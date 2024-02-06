import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { spacing, colors, radius } = theme;

  return {
    root: {
      display: "flex",
      minWidth: "328px",
      minHeight: "52px",
      margin: 0,
      padding: spacing.spacing5,
      backgroundColor: colors.primary99,
      borderRadius: radius.radius100,
    },
    rootEn: {
      display: "inline-flex",
      margin: 0,
      padding: spacing.spacing5,
      backgroundColor: colors.primary99,
      borderRadius: radius.radius100,
    },
  };
});
