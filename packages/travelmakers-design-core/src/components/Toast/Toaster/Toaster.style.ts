import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { colors, shadows, radius } = theme;

  return {
    toast: {
      width: "328px",
      minHeight: "54px",
      color: `${colors.white} !important`,
      backgroundColor: `${colors.black30} !important`,
      boxShadow: `${shadows.elevation4} !important`,
      borderRadius: radius.radius20,
    },
  };
});
