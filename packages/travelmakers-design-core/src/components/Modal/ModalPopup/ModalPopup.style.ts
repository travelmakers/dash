import { createStyles, keyframes } from "@travelmakers/styles";
import { Props } from "./ModalPopup";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

const popup = keyframes`
  from {
    transform: translateY(16px);
  }
  to {
    transform: translateY(0);
  }
`;

export default createStyles((theme, { content }: Pick<Props, "content">) => {
  const { colors, shadows, spacing, typography, transitionTiming } = theme;

  return {
    root: {
      position: "fixed",
      zIndex: 101,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.black30,
      backdropFilter: "blur(16px)",
      animation: `${fadeIn} 0.2s ${transitionTiming.easeInOut}`,
    },
    dialog: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      rowGap: spacing.spacing30,
      width: "328px",
      height: "174px",
      margin: "0 auto",
      padding: spacing.spacing30,
      filter: `drop-shadow(${shadows.elevation5})`,
      border: 0,
      borderRadius: "12px",
      backgroundColor: colors.white,
      transform: "translateY(16px)",

      "&[open]": {
        transform: "translateY(0)",
        animation: `${popup} 0.2s ${transitionTiming.easeInOut}`,
      },
    },
    title: {
      ...typography.subhead1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.onBackground,
      textAlign: "center",
      flex: content ? 0 : 1,
    },
    content: {
      ...typography.body2,
      display: "-webkit-box",
      margin: 0,
      color: colors.onBackground,
      textAlign: "center",
      textOverflow: "ellipsis",
      overflow: "hidden",
      "-webkit-line-clamp": "2",
      "-webkit-box-orient": "vertical",
    },
    buttons: {
      display: "flex",
      columnGap: spacing.spacing10,
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    button: {
      flex: 1,
    },
  };
});
