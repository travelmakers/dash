import { CSSObject, TmTheme, createStyles } from "@travelmakers/styles";
import { Props } from "./SelectRadioItem";

const getLabelStyle = (
  spacing: TmTheme["spacing"],
  isVisibleLabel: Props["isVisibleLabel"]
): CSSObject | undefined => {
  if (!isVisibleLabel) return;

  return {
    display: "inline-flex",
    alignItems: "center",
    columnGap: spacing.spacing10,
    padding: "2px 0",
  };
};

export default createStyles(
  (
    theme,
    {
      isVisibleLabel,
      disabled,
    }: {
      isVisibleLabel: Props["isVisibleLabel"];
      disabled: HTMLInputElement["disabled"];
    }
  ) => {
    const { colors, radius, typography, spacing, shadows } = theme;

    return {
      root: {
        ...getLabelStyle(spacing, isVisibleLabel),
        cursor: disabled ? "default" : "pointer",

        ".tm-select-radio__item": {
          width: "16px",
          height: "16px",
          backgroundColor: colors.white,
          border: `5px solid ${colors.primaryContainer}`,
          borderRadius: radius.radius20,
          flexShrink: 0,
        },

        ".tm-select-radio__item__label": {
          ...typography.body2,
          color: colors.primary1,
        },

        "&:focus > .tm-select-radio__item, &:hover > .tm-select-radio__item": {
          filter: !disabled
            ? `drop-shadow(${shadows.elevation1})`
            : shadows.none,
        },

        "&:active > .tm-select-radio__item": {
          borderColor: !disabled ? colors.surfaceInteract : colors.surface,
          filter: shadows.none,
        },
      },
      input: {
        "&:checked + .tm-select-radio__item": {
          borderColor: colors.primary,
        },

        "&:disabled + .tm-select-radio__item": {
          borderColor: colors.surface,
        },

        "&:disabled ~ .tm-select-radio__item__label": {
          color: colors.primary3,
        },
      },
    };
  }
);
