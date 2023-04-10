import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { spacing, colors } = theme;

  return {
    root: {
      display: "inline-flex",
      minWidth: "328px",
      minHeight: "52px",
      margin: 0,
      padding: spacing.spacing5,
      backgroundColor: colors.primary99,
      borderRadius: "26px",
    },
  };
});
