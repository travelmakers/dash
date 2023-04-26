import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { typography, colors, radius } = theme;

  return {
    root: {
      ".select-button-item__content": {
        ...typography.body2,
        height: "44px",
        color: colors.primary3,
        border: `1px solid ${colors.outline}`,

        "&:first-child": {
          borderRadius: `${radius.radius20} 0px 0px ${radius.radius20}`,
        },
        "&:last-child": {
          borderRadius: `0px ${radius.radius20} ${radius.radius20} 0px`,
        },
      },
    },
    input: {
      "&:checked + .select-button-item__content": {
        color: colors.primary,
        borderColor: colors.primary,
      },
    },
  };
});
