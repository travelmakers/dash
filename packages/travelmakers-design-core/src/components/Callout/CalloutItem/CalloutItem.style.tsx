import { TmTheme, createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme: TmTheme) => {
  const { colors, typography } = theme;

  return {
    root: {
      margin: 0,
      color: colors.onSurface,
      ...typography.body3,
    },
  };
});
