import { TmTheme, createStyles } from "@travelmakers/styles";
import { Props } from "./SelectDropBox";

export const getBackgroundColor = (
  colors: TmTheme["colors"],
  disabled: Props["disabled"]
) => (!disabled ? colors.white : colors.surface);

export default createStyles((theme, { disabled }: Pick<Props, "disabled">) => {
  const { colors, spacing, typography, radius } = theme;

  return {
    root: {
      display: "flex",
      flexDirection: "column",
      rowGap: spacing.spacing5,
    },
    label: {
      ...typography.body2,
      color: colors.primary1,
      fontWeight: 400,
    },
    dropdown: {
      position: "relative",
      backgroundColor: getBackgroundColor(colors, disabled),
      borderRadius: radius.radius20,
    },
  };
});
