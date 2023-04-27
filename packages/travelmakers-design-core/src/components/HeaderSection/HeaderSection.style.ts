import { createStyles } from "@travelmakers-design-v2/styles";
import { HEADER_SECTION_COLOR, Props } from "./HeaderSection";

export default createStyles((theme, { type }: Pick<Props, "type">) => {
  const { colors, spacing } = theme;

  return {
    root: {
      display: "flex",
      alignItems: "center",
      minWidth: "328px",
      minHeight: "53px",

      "&::after, &::before": {
        content: '""',
        width: "100%",
        height: "1px",
        backgroundColor: colors[HEADER_SECTION_COLOR[type]],
      },
    },
    title: {
      padding: `0 ${spacing.spacing70}`,
    },
  };
});
