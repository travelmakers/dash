import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  return {
    container: {
      width: "328px",
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.radius20,
      ["& > a"]: {
        textDecoration: "none",
      },
    },
    contentContainer: {
      padding: theme.spacing.spacing30,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing10,
    },
    contentBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: theme.spacing.spacing30,
      ["& >  span"]: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        ["-webkit-box-orient"]: "vertical",
        ["-webkit-line-clamp"]: "2",
      },
    },
    headerBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    footerBox: {
      display: "flex",
      gap: theme.spacing.spacing10,
    },
    divider: {
      backgroundColor: theme.colors.outline,
      height: "1px",
    },
  };
});
