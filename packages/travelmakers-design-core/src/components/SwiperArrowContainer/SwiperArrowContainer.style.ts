import { createStyles } from "@travelmakers/styles";
import { Props } from "./SwiperArrowContainer";

export default createStyles(
  (
    theme,
    {
      leftArrowHover,
      rightArrowHover,
    }: { leftArrowHover: boolean; rightArrowHover: boolean }
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
    };
  }
);