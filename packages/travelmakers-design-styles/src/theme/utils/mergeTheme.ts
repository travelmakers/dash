import { TmTheme, TmThemeOverride } from "../types";

export function mergeTheme(
  currentTheme: TmTheme,
  themeOverride?: TmThemeOverride
): TmTheme {
  if (!themeOverride) {
    return currentTheme;
  }

  return Object.keys(currentTheme).reduce((acc, key) => {
    if (key === "typography" && themeOverride.typography) {
      const sizes = themeOverride.typography
        ? Object.keys(currentTheme.typography).reduce((typographyAcc, h) => {
            // eslint-disable-next-line no-param-reassign
            typographyAcc[h] = {
              ...currentTheme.typography[h],
              ...themeOverride.typography[h],
            };
            return typographyAcc;
          }, {} as TmTheme["typography"])
        : currentTheme.typography;
      return {
        ...acc,
        typography: {
          ...currentTheme.typography,
          ...themeOverride.typography,
          ...sizes,
        },
      };
    }

    acc[key] =
      typeof themeOverride[key] === "object"
        ? { ...currentTheme[key], ...themeOverride[key] }
        : themeOverride[key] || currentTheme[key];
    return acc;
  }, {} as TmTheme);
}
