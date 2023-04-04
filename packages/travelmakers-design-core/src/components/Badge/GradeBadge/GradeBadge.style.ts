import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { colors, typography } = theme;

  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.primary3,
      columnGap: "3px",
      ...typography.body3,
    },
    vertical: {
      width: "1px",
      height: "10px",
      backgroundColor: colors.primary3,
    },
  };
});
