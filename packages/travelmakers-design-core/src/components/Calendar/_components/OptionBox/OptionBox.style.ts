import { createStyles } from "@travelmakers/styles";

export default createStyles((theme, { open }: { open: boolean }) => {
  return {
    optionBox: {
      maxWidth: theme.deviceSizes.mobile,
      margin: "auto",
      position: "sticky",
      bottom: 0,
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
    submitButton: {
      display: "flex",
      justifyContent: "center",
    },
  };
});
