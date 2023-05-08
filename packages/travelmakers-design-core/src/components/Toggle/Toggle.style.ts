import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { colors, shadows, radius } = theme;

  return {
    root: {
      display: "flex",
      width: "52px",
      height: "32px",

      ".tm-toggle": {
        position: "relative",
        width: "100%",
        backgroundColor: colors.primaryContainer,
        borderRadius: radius.radius100,
        cursor: "pointer",

        "&::before": {
          position: "absolute",
          content: '""',
          left: "2px",
          top: "50%",
          width: "28px",
          height: "28px",
          backgroundColor: colors.white,
          border: `1px solid ${colors.outline}`,
          borderRadius: radius.radius100,
          boxShadow: shadows.elevation1,
          transform: "translate(0, -50%)",
          transition: "transform 0.2s cubic-bezier(0, 0, 0.5, 1)",
        },
      },
    },
    input: {
      "&:checked + .tm-toggle": {
        backgroundColor: colors.secondary,

        "&::before": {
          boxShadow: "none",
          transform: "translate(calc(100% - 8px), -50%)",
        },
      },
    },
  };
});
