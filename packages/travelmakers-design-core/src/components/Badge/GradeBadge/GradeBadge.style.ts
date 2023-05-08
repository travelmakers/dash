import { createStyles } from "@travelmakers/styles";

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
  };
});
