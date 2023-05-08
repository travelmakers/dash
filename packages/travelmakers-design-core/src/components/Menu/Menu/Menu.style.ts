import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { colors, radius } = theme;

  return {
    root: {
      display: "flex",
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
