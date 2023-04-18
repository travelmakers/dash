import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  return {
    card: {
      width: "281px",
      backgroundColor: theme.colors.white,
      boxShadow: theme.shadows.elevation3,
      borderRadius: theme.radius.radius20,
    },
    container: {
      padding: `${theme.spacing.spacing30} ${theme.spacing.spacing50}`,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing20,
      minHeight: "395px",
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.primary,
    },
    headerGroup: {
      minHeight: 52,
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
    },
    groupBox: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing5,
      ["& > ul"]: {
        margin: 0,
        paddingInlineStart: "30px",
        paddingBottom: theme.spacing.spacing20,
      },
    },
    titleBox: {
      display: "flex",
      justifyContent: "space-between",
    },
    priceBox: {
      ["& > div"]: {
        justifyContent: "end",
      },
    },
    submitButton: {
      borderRadius: `0 0 ${theme.radius.radius20} ${theme.radius.radius20}`,
    },
  };
});
