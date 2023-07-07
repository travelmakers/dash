import { createStyles, keyframes } from "@travelmakers/styles";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const popup = keyframes`
  from {
    transform: translateY(16px);
  }
  to {
    transform: translateY(0);
  }
`;

export default createStyles((theme) => {
  const { colors, shadows, transitionTiming } = theme;

  return {
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100vh",
      padding: 0,
      border: 0,
      backgroundColor: colors.black30,
      backdropFilter: "blur(16px)",
      zIndex: 9999,

      "&[open]": {
        animation: `${fadeIn} 0.2s ${transitionTiming.easeInOut}`,
      },
    },
    modal: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: colors.white,
      filter: `drop-shadow(${shadows.elevation5})`,
      animation: `${popup} 0.2s ${transitionTiming.easeInOut}`,
      overflow: "hidden",
    },
  };
});
