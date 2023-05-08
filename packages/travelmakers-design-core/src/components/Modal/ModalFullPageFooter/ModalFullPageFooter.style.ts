import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { colors, spacing } = theme;

  return {
    root: {
      height: "84px",
      padding: spacing.spacing30,
      paddingBottom: spacing.spacing60,
      backgroundColor: colors.white,
      borderTop: `1px solid ${colors.outline}`,
    },
    button: {
      width: "100%",
    },
  };
});
