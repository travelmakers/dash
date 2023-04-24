import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { colors, spacing, typography, radius } = theme;

  return {
    label: {
      minWidth: "98px",
      textAlign: "center",
      cursor: "pointer",

      ".tm-radio__content": {
        ...typography.body3,
        padding: `${spacing.spacing10} ${spacing.spacing30}`,
        color: colors.onPrimary,
        borderRadius: radius.radius100,
        overflow: "hidden",
      },
    },
    input: {
      "&:checked + .tm-radio__content": {
        color: colors.primary1,
        backgroundColor: colors.white,
      },
    },
  };
});
