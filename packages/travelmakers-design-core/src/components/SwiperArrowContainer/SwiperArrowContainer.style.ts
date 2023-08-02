import { createStyles } from "@travelmakers/styles";

export default createStyles(
  (
    theme,
    {
      leftArrowHover,
      rightArrowHover,
      hasDimmer,
      dimmerColor,
      isEnd,
    }: {
      leftArrowHover: boolean;
      rightArrowHover: boolean;
      hasDimmer: boolean;
      dimmerColor?: string;
      isEnd?: boolean;
    }
  ) => {
    return {
      container: {
        position: "relative",
        ["&:hover"]: {
          opacity: 1,
        },
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
        zIndex: 2,
      },
      contentScrollLeft: {
        left: theme.spacing.spacing70,
        visibility: leftArrowHover ? "visible" : "hidden",
        [`${theme.media.mobile}`]: {
          display: "none",
        },
      },
      contentScrollRight: {
        right: 0,
        visibility: rightArrowHover ? "visible" : "hidden",
        [`${theme.media.mobile}`]: {
          display: "none",
        },
      },
      contentDimmer: {
        position: "absolute",
        zIndex: 1,
        top: 0,
        right: 0,
        width: "40px",
        height: "100%",
        background: `linear-gradient(270deg, ${
          dimmerColor ? theme.colors[dimmerColor] : "#FFFFFF"
        } 0%, rgba(255, 255, 255, 0.75) 51.04%, rgba(255, 255, 255, 0) 100%)`,
        visibility: isEnd ? "hidden" : "visible",
        display: hasDimmer ? "block" : "none",
      },
      contentScrollContainer: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing.spacing10,
        overflow: "hidden",
        [`${theme.media.mobile}`]: {
          overflow: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        },
      },
    };
  }
);
