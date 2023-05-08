import { createStyles } from "@travelmakers/styles";

export default createStyles((theme, { open }: { open: boolean }) => {
  return {
    optionBox: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      maxWidth: theme.deviceSizes.mobile,
      display: "flex",
      flexDirection: "column",
      padding: `${theme.spacing.spacing50} ${theme.spacing.spacing50} ${theme.spacing.spacing30}`,
      gap: theme.spacing.spacing30,
      backgroundColor: theme.colors.surface,
    },
    titleBox: {
      display: "flex",
      justifyContent: "space-between",
      ["& > svg"]: {
        cursor: "pointer",
        transform: open && "scaleY(-1)",
      },
    },
    contentBox: {
      display: open ? "block" : "none",
    },
  };
});
