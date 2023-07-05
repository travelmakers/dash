import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    container: {
      width: "328px",
      boxShadow: theme.shadows.elevation2,
      borderRadius: theme.radius.radius20,
      overflow: "hidden",
      ["& > a"]: {
        textDecoration: "none",
      },
    },
    imageBox: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      height: "183px",
      ["& > img"]: {
        position: "absolute",
        transition: `all 0.2s ${theme.transitionTiming.easeInOut}`,
        ["&:hover"]: {
          transform: "scale(1.1)",
        },
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing30,
      padding: theme.spacing.spacing30,
    },
    contentHeader: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing5,
    },
    flexBox: {
      display: "flex",
      justifyContent: "space-between",
      gap: theme.spacing.spacing5,
    },
    soldOutBox: {
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "328px",
      height: "183px",
      background: "rgba(0, 0, 0, 0.5)",
      position: "absolute",
      top: 0,
      left: 0,
    },
  };
});
