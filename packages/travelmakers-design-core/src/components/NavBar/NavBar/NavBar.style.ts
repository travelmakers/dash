import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    root: {
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "1fr 4fr 1fr",
      minHeight: "48px",
    },
    title: {
      margin: "0 auto",
      gridColumn: 2,
    },
  };
});
