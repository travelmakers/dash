import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles(
  (
    theme,
    {
      rightArrowHover,
      leftArrowHover,
    }: {
      rightArrowHover: boolean;
      leftArrowHover: boolean;
    }
  ) => {
    return {
      container: {
        width: "328px",
        display: "inline-block",
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
          transition: "all 0.2s cubic-bezier(0, 0, 0.5, 1)",
          ["&:hover"]: {
            width: "110%",
            height: "110%",
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
      contentTag: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflowY: "hidden",
      },
      contentScroll: {
        position: "absolute",
        width: "32px",
        height: "32px",
        top: "50%",
        transform: "translate(-50%, -50%)",
        background: theme.colors.white,
        border: `1px solid ${theme.colors.white}`,
        boxShadow: "0px 2px 10px rgba(48, 55, 63, 0.2)",
        borderRadius: theme.radius.radius100,
        padding: "6px",
      },
      contentScrollLeft: {
        left: theme.spacing.spacing30,
        visibility: leftArrowHover ? "visible" : "hidden",
      },
      contentScrollRight: {
        right: theme.spacing.spacing5,
        visibility: rightArrowHover ? "visible" : "hidden",
      },
      contentScrollContainer: {
        display: "flex",
        flexDirection: "row",
        overflowY: "hidden",
        gap: theme.spacing.spacing10,
      },
      contentDimmer: {
        position: "absolute",
        right: 0,
        width: "40px",
        height: "100%",
        background:
          "linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.75) 51.04%, rgba(255, 255, 255, 0) 100%)",
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
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        top: 0,
        left: 0,
      },
    };
  }
);
