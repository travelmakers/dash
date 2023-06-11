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
      width: "100%",
      margin: "0 auto",
      gridColumn: 2,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "center",
    },
  };
});
