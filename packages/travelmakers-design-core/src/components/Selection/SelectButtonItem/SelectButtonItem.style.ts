import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { typography, colors, radius } = theme;

  return {
    root: {
      minWidth: "164px",
      marginLeft: "-1px",

      "&:first-child": {
        marginLeft: 0,
      },

      ".select-button-item__content": {
        ...typography.body2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        color: colors.primary3,
        border: `1px solid ${colors.outline}`,
        cursor: "pointer",
      },

      ["&:first-child > .select-button-item__content"]: {
        borderRadius: `${radius.radius20} 0px 0px ${radius.radius20}`,
      },

      ["&:last-child > .select-button-item__content"]: {
        borderRadius: `0px ${radius.radius20} ${radius.radius20} 0px`,
      },
    },
    input: {
      "&:checked + .select-button-item__content": {
        position: "relative",
        color: colors.primary,
        borderColor: colors.primary,
        zIndex: 1,
      },
    },
  };
});
