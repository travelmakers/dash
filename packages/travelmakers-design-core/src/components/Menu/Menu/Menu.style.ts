import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { colors, radius } = theme;

  return {
    root: {
      display: "inline-flex",
      flexDirection: "column",
      rowGap: "1px",
      minWidth: "328px",
      margin: 0,
      padding: 0,
      backgroundColor: colors.outline,
      border: `1px solid ${colors.outline}`,
      borderRadius: radius.radius20,
      overflow: "hidden",
    },
  };
});
