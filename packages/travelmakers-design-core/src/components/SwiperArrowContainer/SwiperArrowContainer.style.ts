import { createStyles } from "@travelmakers/styles";

export default createStyles(
  (
    theme,
    {
      leftArrowHover,
      rightArrowHover,
      dimmerHidden,
      dimmerColor,
      hasDimmer,
    }: {
      leftArrowHover: boolean;
      rightArrowHover: boolean;
      dimmerHidden: boolean;
      dimmerColor?: string;
      hasDimmer: boolean;
    }
  ) => {
    return {
      container: {
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
        zIndex: 1,
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
        right: 0,
        width: "40px",
        height: "100%",
        background: `linear-gradient(270deg, ${
          dimmerColor ? theme.colors[dimmerColor] : "#FFFFFF"
        } 0%, rgba(255, 255, 255, 0.75) 51.04%, rgba(255, 255, 255, 0) 100%)`,
        visibility: dimmerHidden ? "hidden" : "visible",
        display: hasDimmer ? "block" : "none",
      },
      contentScrollContainer: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing.spacing10,
        overflow: "hidden",
        [`${theme.media.mobile}`]: {
          overflow: "auto",
          ["-ms-overflow-style"]: "none",
          ["scrollbar-width"]: "none",
          ["::-webkit-scrollbar"]: {
            display: "none",
          },
        },
      },
    };
  }
);
