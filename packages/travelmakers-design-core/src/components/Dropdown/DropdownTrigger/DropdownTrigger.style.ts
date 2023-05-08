import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { colors } = theme;

  return {
    root: {
      padding: 0,
      backgroundColor: colors.transparent,
      border: 0,
      outline: 0,
      cursor: "pointer",

      "&:disabled": { cursor: "default" },
    },
  };
});
