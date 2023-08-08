import { createStyles } from "@travelmakers/styles";
import { Props } from "./SelectTag";

export default createStyles((theme, { gap }: Pick<Props, "gap">) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      columnGap: gap,
      margin: 0,
      padding: 0,
      border: 0,
      overflowX: "scroll",
      listStyle: 'none',
      msOverflowStyle: "none",
      scrollbarWidth: "none",
    },
  };
});
