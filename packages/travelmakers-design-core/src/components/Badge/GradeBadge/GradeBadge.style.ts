import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.colors.primary3,
      columnGap: "3px",
      ...theme.typography.body3,
    },
    vertical: {
      width: "1px",
      height: "10px",
      backgroundColor: theme.colors.primary3,
    },
  };
});
