import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    container: {
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
    image: {
      flexShrink: 0,
    },
  };
});
