import { createStyles } from "@travelmakers/styles";
import { Props } from "./Tag";

export default createStyles((theme, { gap }: Pick<Props, "gap">) => {
  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: `${gap}px`,
      margin: 0,
      padding: 0,
    },
  };
});
