import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { colors, shadows, typography } = theme;

  return {
    root: {
      ...typography.body3,
      marginLeft: "auto",
      padding: 0,
      color: colors.primary,
      backgroundColor: "transparent",
      border: 0,
      outline: 0,
      cursor: "pointer",

      [":not(:disabled)"]: {
        "&:hover": {
          filter: `drop-shadow(${shadows.elevation1})`,
        },
        "&:focus-visible": {
          color: colors.primaryInteract,
          filter: `drop-shadow(${shadows.elevation1})`,
        },
        "&:active": {
          color: colors.primaryInteract,
          filter: shadows.none,
        },
      },
      [`&:disabled`]: {
        color: colors.primary4,
        cursor: "auto",
      },
    },
  };
});
