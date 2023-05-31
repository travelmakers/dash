import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    container: {
      width: "100%",
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.radius20,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing30,
      ["& > a"]: {
        textDecoration: "none",
      },
    },
    cardHeader: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
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
    PriceNonBox: {
      ...theme.typography.subhead2,
      color: theme.colors.primary2,
      minHeight: "76px",
      display: "flex",
      alignItems: " flex-end",
    },
  };
});
