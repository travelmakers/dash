import { createStyles, TmTheme } from "@travelmakers-design-v2/styles";
import { TagItemType } from "../Tag/Tag.type";
import { Props } from "./IconTag";

const getStyle = (theme: TmTheme, type: TagItemType) => {
  const { colors } = theme;

  switch (type) {
    case "fill":
      return {
        backgroundColor: colors.secondaryContainer,
        border: `1px solid ${colors.secondaryContainer}`,
      };
    case "line":
      return {
        backgroundColor: colors.white,
        border: `1px solid ${colors.secondary}`,
      };

    default:
      return {};
  }
};

export default createStyles((theme, { type }: Pick<Props, "type">) => {
  const { colors, spacing, typography, radius } = theme;

  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: spacing.spacing5,
      color: colors.secondary1,
      padding: `2px ${spacing.spacing5}`,
      ...typography.caption,
      fontWeight: 700,
      ...getStyle(theme, type),
      borderRadius: radius.radius10,
    },
  };
});
