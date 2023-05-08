import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    root: {
      position: "fixed",
      width: "100%",
      height: "100%",
    },
    container: {
      backgroundColor: theme.colors.white,
      maxWidth: theme.deviceSizes.mobile,
      height: "100%",
      position: "relative",
    },
    calendar: {
      position: "absolute",
      padding: theme.spacing.spacing30,
      height: "calc(100% - 120px)",
      backgroundColor: theme.colors.white,
      paddingBottom: "120px",
      overflowY: "scroll",
      width: "100%",
      ["& > table"]: {
        width: "100%",
        borderCollapse: "collapse",
        color: theme.colors.primary1,
        ["tr"]: {
          height: 48,
        },
      },
    },
    tableHead: {
      padding: `${theme.spacing.spacing10} ${theme.spacing.spacing30}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    tableCell: {
      textAlign: "center",
      padding: theme.spacing.spacing20,
    },
    tableMonthly: {
      textAlign: "right",
    },
    mt10: {
      marginTop: theme.spacing.spacing10,
    },
    sunday: {
      color: theme.colors.error,
    },
    saturday: {
      color: theme.colors.tertiary,
    },
  };
});