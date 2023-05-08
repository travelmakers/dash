import { createStyles, CSSObject, TmTheme } from "@travelmakers/styles";
import { Props } from "./DotBadge";
import { DotBadgeSize, DotBadgeType } from "./DotBadge.type";

const getFontSize = (
  theme: TmTheme,
  type: DotBadgeType,
  size: DotBadgeSize<DotBadgeType>
) => {
  if (type === "bullet") return;

  switch (size) {
    case "small":
      return theme.typography.caption;
    case "medium":
      return theme.typography.body3;
    case "large":
      return theme.typography.body2;
    default:
      break;
  }
};

const getBaseStyle = (theme: TmTheme, type: DotBadgeType): CSSObject => {
  switch (type) {
    case "text":
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        borderRadius: "6px",
      };
    case "number":
      return {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `0 ${theme.spacing.spacing10}`,
        borderRadius: theme.radius.radius100,
      };
    case "bullet":
      return {
        borderRadius: theme.radius.radius100,
      };
    default:
      break;
  }
};

const getStyle = (
  theme: TmTheme,
  type: DotBadgeType,
  size: DotBadgeSize<DotBadgeType>
) => {
  const styleMap: Record<
    DotBadgeType,
    Record<DotBadgeSize<DotBadgeType>, CSSObject>
  > = {
    text: {
      small: {
        width: "16px",
        height: "16px",
      },
      medium: {
        width: "20px",
        height: "20px",
      },
      large: {
        width: "24px",
        height: "24px",
      },
      xLarge: {
        display: "none",
      },
    },
    number: {
      small: {
        height: "16px",
      },
      medium: {
        height: "20px",
      },
      large: {
        height: "24px",
      },
      xLarge: {
        display: "none",
      },
    },
    bullet: {
      small: {
        width: "8px",
        height: "8px",
      },
      medium: {
        width: "16px",
        height: "16px",
      },
      large: {
        width: "20px",
        height: "20px",
      },
      xLarge: {
        width: "24px",
        height: "24px",
      },
    },
  };

  return { ...getBaseStyle(theme, type), ...styleMap[type][size] };
};

export default createStyles(
  (theme, { type, size }: Pick<Props<DotBadgeType>, "type" | "size">) => {
    const { colors } = theme;

    return {
      badge: {
        color: colors.onError,
        backgroundColor: colors.error,
        ...getStyle(theme, type, size),
        ...getFontSize(theme, type, size),
      },
    };
  }
);
