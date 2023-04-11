import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { typography } = theme;

  return {
    root: {
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "repeat(3, 1fr)",
      minHeight: "48px",

      ["& > .sub-element"]: {
        ...typography.body3,
        marginLeft: "auto",
      },
    },
    title: {
      margin: "0 auto",
      gridColumn: 2,
    },
  };
});
