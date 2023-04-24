import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  return {
    container: {
      height: 800,
      backgroundColor: theme.colors.white,
      overflowY: "scroll",
      ["& > table"]: {
        borderCollapse: "collapse",
        color: theme.colors.primary1,
        ["tr"]: {
          height: 48,
        },
      },
    },
    tableHead: {
      ["& > td"]: {
        padding: `${theme.spacing.spacing10} ${theme.spacing.spacing30}`,
      },
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
