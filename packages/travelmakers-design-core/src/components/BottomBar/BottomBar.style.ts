import { createStyles } from "@travelmakers/styles";

interface BottomBarStylesProps {}

export default createStyles((theme, {}: BottomBarStylesProps, getRef) => {
  const { colors } = theme;

  return {
    root: {
      backgroundColor: theme.colors.neutral99,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `${theme.spacing.spacing10} ${theme.spacing.spacing50}`,
      gap: "80px",
      height: "64px",
      width: "100%",
      borderTop: `1px solid ${colors.outline}`,

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
