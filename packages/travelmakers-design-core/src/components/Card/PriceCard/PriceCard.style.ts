import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    container: {
      display: "inline-block",
      width: "120px",
      minHeight: "80px",
      border: `1px solid ${theme.colors.outline}`,
      borderRadius: theme.spacing.spacing5,
      padding: `${theme.spacing.spacing10} ${theme.spacing.spacing20}`,
      flexShrink: 0,
    },
  };
});
