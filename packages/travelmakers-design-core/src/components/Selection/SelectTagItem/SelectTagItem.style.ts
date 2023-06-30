import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { colors, spacing, typography, radius } = theme;

  return {
    root: {
      whiteSpace: "nowrap",

      ".tm-select-tag__item": {
        ...typography.body2,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "38px",
        padding: `0 ${spacing.spacing30}`,
        color: colors.primary1,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: colors.outline,
        borderRadius: radius.radius100,
        cursor: "pointer",
      },
    },
    input: {
      "&:checked + .tm-select-tag__item": {
        color: colors.white,
        borderColor: colors.primary1,
        backgroundColor: colors.primary1,
      },
    },
  };
});
