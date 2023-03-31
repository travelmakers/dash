import { createStyles, TmTheme } from "@travelmakers-design-v2/styles";
import { TagItemType } from "../Tag/Tag";
import { Props } from "./IconTag";

const getStyle = (theme: TmTheme, type: TagItemType) => {
  switch (type) {
    case "fill":
      return {
        backgroundColor: theme.colors.secondaryContainer,
      };
    case "line":
      return {
        backgroundColor: "#fff",
        border: `1px solid ${theme.colors.secondary}`,
      };

    default:
      return {};
  }
};

export default createStyles((theme, { type }: Pick<Props, "type">) => {
  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: theme.spacing.spacing5,
      color: theme.colors.secondary1,
      padding: `2px ${theme.spacing.spacing5}`,
      ...theme.typography.caption,
      fontWeight: 700,
      ...getStyle(theme, type),
      borderRadius: theme.radius.radius10,
    },
  };
});
