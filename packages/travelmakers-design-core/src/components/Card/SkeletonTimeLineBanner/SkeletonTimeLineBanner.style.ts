import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    root: {
      backgroundColor: "rgba(200, 200, 200, 0.5)",
      borderRadius: theme.radius.radius20,
      padding: theme.spacing.spacing20,
      position: "relative",
      overflow: "hidden",
      minWidth: "328px",
    },
    titleWrapper: {
      marginBottom: theme.spacing.spacing10,
      maxWidth: "220px",
    },
    labelWrapper: {
      display: "flex",
      alignItems: "center",
      width: "fit-content",
    },
    labelText: {
      width: "fit-content",
    },
    arrowImage: {
      width: "16px",
      height: "16px",
      marginLeft: "2px",
    },
    imageOval: {
      position: "absolute",
      width: "78.03px",
      height: "110.61px",
      right: -5,
      bottom: -25,
      background:
        "linear-gradient(149.99deg, rgba(255, 255, 255, 0.5) 0%, rgba(200, 200, 200, 0.5) 88.27%)",
      borderRadius: "7575.76px",
    },
  };
});
