import { TmTheme, createStyles } from "@travelmakers/styles";
import { Props } from "./SelectDropBox";

const SELECT_DROP_BOX_MAX_WIDTH: Record<Props["type"], string> = {
  option: "328px",
  filter: "98px",
};

export const SELECT_DROP_BOX_HEIGHT: Record<Props["type"], string> = {
  option: "44px",
  filter: "34px",
};

export const getBackgroundColor = (
  colors: TmTheme["colors"],
  disabled: Props["disabled"]
) => (!disabled ? colors.white : colors.surface);

export default createStyles(
  (theme, { type, disabled }: Pick<Props, "type" | "disabled">) => {
    const { colors, spacing, typography, radius } = theme;

    return {
      root: {
        display: "flex",
        flexDirection: "column",
        rowGap: spacing.spacing5,
        maxWidth: SELECT_DROP_BOX_MAX_WIDTH[type],
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
  }
);
