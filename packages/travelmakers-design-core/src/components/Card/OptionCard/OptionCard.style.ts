import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    card: {
      width: "281px",
      height: '100%',
      backgroundColor: theme.colors.white,
      boxShadow: theme.shadows.elevation3,
      borderRadius: theme.radius.radius20,
    },
    container: {
      padding: `${theme.spacing.spacing30} ${theme.spacing.spacing50}`,
      // gap: theme.spacing.spacing30,
      minHeight: "395px",
      height: 'calc(100% - 40px)',
    },
    headerGroup: {
      minHeight: 52,
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      marginBottom: theme.spacing.spacing30,
    },
    groupBox: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing5,
      marginBottom: theme.spacing.spacing30,
      ["& > ul"]: {
        margin: 0,
        paddingInlineStart: "30px",
        paddingBottom: theme.spacing.spacing20,
      },
    },
    gap: {
      marginBottom: theme.spacing.spacing30,
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
      display: "flex",
      justifyContent: "center",
      borderRadius: `0 0 ${theme.radius.radius20} ${theme.radius.radius20}`,
    },
    PriceNonBox: {
      ...theme.typography.subhead2,
      color: theme.colors.primary2,
      minHeight: "52px",
      display: "flex",
      alignItems: " flex-end",
    },
  };
});
