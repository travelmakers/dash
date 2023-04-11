import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  return {
    container: {
      width: "328px",
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.radius20,
      padding: `${theme.spacing.spacing50} ${theme.spacing.spacing30}`,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing30,
    },
    divider: {
      backgroundColor: theme.colors.outline,
      height: "1px",
    },
    currencyContainer: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing5,
    },
    currencyBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.spacing5,
    },
  };
});
