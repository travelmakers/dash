import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      minWidth: "120px",
      height: "80px",
      border: `1px solid ${theme.colors.outline}`,
      borderRadius: theme.spacing.spacing5,
      padding: `${theme.spacing.spacing10} ${theme.spacing.spacing20}`,
      flexShrink: 0,
    },
    tagItem: {
      padding: "2px 0px",
      width: "100%",
      textAlign: "center",
    },
  };
});
