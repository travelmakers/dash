import {
  CoRadius,
  createStyles,
  CSSObject,
  TmTheme,
} from "@travelmakers-design-v2/styles";
import { Props } from "../Tag/Tag";
import {
  TagItemColorType,
  TagItemType,
  TagRound,
  TagSize,
} from "../Tag/Tag.type";

const TAGITEM_ROUND: Record<TagRound, CoRadius | ""> = {
  default: "",
  half: "radius20",
  full: "radius100",
};

const getSize = (theme: TmTheme, size: TagSize) => {
  const { typography, spacing } = theme;

  switch (size) {
    case "small":
      return {
        height: "20px",
        ...typography.caption,
        padding: `2px ${spacing.spacing10}`,
      };
    case "medium":
      return {
        height: "24px",
        ...typography.body3,
        padding: `2px ${spacing.spacing20}`,
      };
    case "large":
      return {
        height: "28px",
        ...typography.body2,
        padding: `3px ${spacing.spacing30}`,
      };
    default:
      return;
  }
};

const getStyle = (
  theme: TmTheme,
  type: TagItemType,
  color: TagItemColorType
) => {
  const { colors } = theme;

  const styles: CSSObject = {
    color: "",
    backgroundColor: colors.white,
    border: 0,
  };

  const colorMap: Record<TagItemColorType, Record<TagItemType, CSSObject>> = {
    green: {
      fill: {
        color: colors.onSecondary,
        backgroundColor: colors.secondary,
      },
      line: {
        color: colors.secondary,
        border: `1px solid ${colors.secondary}`,
      },
    },
    blue: {
      fill: {
        color: colors.onTertiary,
        backgroundColor: colors.tertiary,
      },
      line: {
        color: colors.tertiary,
        border: `1px solid ${colors.tertiary}`,
      },
    },
    purple: {
      fill: {
        color: colors.white,
        backgroundColor: colors.purple1,
      },
      line: {
        color: colors.purple1,
        border: `1px solid ${colors.purple1}`,
      },
    },
    gray: {
      fill: {
        color: colors.onPrimaryContainer,
        backgroundColor: colors.surface,
      },
      line: {
        color: colors.primary3,
        border: `1px solid ${colors.surfaceVariant}`,
        backgroundColor: "transparent",
      },
    },
  };

  if (type === "fill" || type === "line") {
    styles.color = colorMap[color][type].color;
    styles.backgroundColor =
      colorMap[color][type].backgroundColor ?? styles.backgroundColor;
    styles.border =
      type === "line" ? colorMap[color]["line"].border : styles.border;
  }

  return styles;
};

export default createStyles(
  (
    theme,
    {
      type,
      color,
      size,
      roundness,
    }: Pick<Props, "type" | "color" | "size" | "roundness">
  ) => {
    return {
      item: {
        listStyle: "none",
        ...getStyle(theme, type, color),
        ...getSize(theme, size),
        borderRadius: theme.radius[TAGITEM_ROUND[roundness]] ?? 0,
      },
    };
  }
);
