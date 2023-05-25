import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    container: {
      width: "328px",
      display: "inline-block",
      ["& > a"]: {
        textDecoration: "none",
      },
    },

    cardBox: {
      position: "relative",
      background: theme.colors.white,
      borderRadius: theme.radius.radius20,
      padding: `165px ${theme.spacing.spacing30} ${theme.spacing.spacing30}`,
      filter: `drop-shadow(${theme.shadows.elevation2})`,
    },

    imageBox: {
      position: "absolute",
      top: -27,
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      overflow: "hidden",
      borderRadius: theme.radius.radius20,
      width: "296px",
      height: "180px",

      ["& > img"]: {
        position: "absolute",
        transition: "all 0.2s cubic-bezier(0, 0, 0.5, 1)",
        ["&:hover"]: {
          transform: "scale(1.1)",
        },
      },
    },

    imageLabel: {
      position: "absolute",
      left: theme.spacing.spacing30,
      top: -4,
    },

    contentBox: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing20,

      "& > ul": {
        gap: theme.spacing.spacing5,
      },
    },

    hotelInfo: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing.spacing5,
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
