import { TmTheme, createStyles } from "@travelmakers-design-v2/styles";

const interactionStyles = (theme: TmTheme, isDisable: boolean) => {
  const { colors, shadows } = theme;

  if (!isDisable) {
    return {
      "&:hover": {
        filter: `drop-shadow(${shadows.elevation1})`,
      },
      "&:focus-visible": {
        color: colors.primaryInteract,
        filter: `drop-shadow(${shadows.elevation1})`,
      },
      "&:active": {
        color: colors.primaryInteract,
        filter: shadows.none,
      },
    };
  } else {
    return {
      color: colors.primary4,
      cursor: "auto",
    };
  }
};

export default createStyles(
  (theme: TmTheme, { isDisable }: { isDisable: boolean }) => {
    const { colors } = theme;

    return {
      root: {
        color: colors.primary,
        textDecoration: "none",
        ...interactionStyles(theme, isDisable),
      },
    };
  }
);
