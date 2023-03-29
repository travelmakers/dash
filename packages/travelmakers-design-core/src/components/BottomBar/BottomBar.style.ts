import { createStyles } from "@travelmakers-design-v2/styles";

interface BottomBarStylesProps {}
import { deviceSizes } from "@travelmakers-design-v2/styles/src/theme/types/TmSize";

export default createStyles((theme, {}: BottomBarStylesProps, getRef) => {
  return {
    root: {
      backgroundColor: theme.colors.neutral99,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `${theme.spacing.spacing10}px ${theme.spacing.spacing50}px`,
      gap: "80px",
      height: "64px",
      width: "100%",
      a: {
        textDecoration: "none",
      },
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "48px",

      ["& > svg"]: {
        width: "32px",
        height: "32px",
      },
    },
  };
});
