import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  return {
    root: {
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "repeat(3, 1fr)",
      minHeight: "48px",
    },
    title: {
      margin: "0 auto",
      gridColumn: 2,
    },
  };
});