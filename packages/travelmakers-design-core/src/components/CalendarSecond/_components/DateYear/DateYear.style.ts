import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    tableHead: {
      padding: `${theme.spacing.spacing10} ${theme.spacing.spacing30}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    mt10: {
      marginTop: theme.spacing.spacing10,
    },
  };
});
