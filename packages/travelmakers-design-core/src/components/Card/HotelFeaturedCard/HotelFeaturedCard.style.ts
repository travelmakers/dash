import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    container: {
      width: "328px",
      height: "100%",
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
      height: "100%",
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
      maskImage: "-webkit-radial-gradient(white, black)",
      ["& > img"]: {
        borderRadius: theme.radius.radius20,
        position: "absolute",
        transition: `all 0.2s ${theme.transitionTiming.easeInOut}`,
        ["&:hover"]: {
          transform: "scale(1.1)",
        },
      },
    },

    imageLabel: {
      position: "absolute",
      left: theme.spacing.spacing30,
      top: 0,
    },

    contentBox: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing20,
      height: "100%",

      "& > ul": {
        gap: theme.spacing.spacing5,
        flexWrap: "nowrap",
        overflow: "hidden",
        textOverflow: "hidden",
        ["& > li"]: {
          flexShrink: 0,
        },
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
