import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { spacing, colors } = theme;

  return {
    root: {
      display: "flex",
      minWidth: "328px",
      minHeight: "52px",
      margin: 0,
      padding: spacing.spacing5,
      backgroundColor: colors.primary99,
      borderRadius: "26px",
    },
  };
});
