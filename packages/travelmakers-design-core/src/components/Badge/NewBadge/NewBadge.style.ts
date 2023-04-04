import { TmTheme, createStyles } from "@travelmakers-design-v2/styles";
import { Props } from "./NewBadge";

const NEWBADGE_SIZE = {
  small: "28px",
  medium: "34px",
};

export default createStyles((theme: TmTheme, { type }: Props) => {
  const { colors, spacing } = theme;

  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: NEWBADGE_SIZE[type],
      padding: `0 ${spacing.spacing30}`,
      backgroundColor: colors.secondary,
    },
  };
});
