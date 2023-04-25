import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  return {
    root: {
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "repeat(3, 1fr)",
      minHeight: "48px",
    },
    button: {
      display: "flex",
      padding: 0,
      marginRight: "auto",
      backgroundColor: "transparent",
      border: 0,
      outline: 0,
    },
    title: {
      margin: "0 auto",
      gridColumn: 2,
    },
  };
});
