import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    container: {
      position: "relative",
      width: "304px",
      height: "200px",
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.radius20,
      filter: `drop-shadow(${theme.shadows.elevation2})`,
    },
    imageContainer: {
      width: "92px",
      height: "122px",
      position: "absolute",
      top: 16,
      left: -16,
      ["& > img"]: {
        borderRadius: theme.radius.radius20,
      },
    },
    content: {
      padding: `${theme.spacing.spacing30} ${theme.spacing.spacing30} ${theme.spacing.spacing30} 92px`,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing20,
    },
    contentText: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 4,
      WebkitBoxOrient: "vertical",
    },
  };
});
