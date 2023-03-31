import {
  createStyles,
  CSSObject,
  TmTheme,
} from "@travelmakers-design-v2/styles";
import { DotBadgeSize, DotBadgeType, Props } from "./DotBadge";

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

const getStyle = (
  theme: TmTheme,
  type: DotBadgeType,
  size: DotBadgeSize<DotBadgeType>
) => {
  const textBaseStyle: CSSObject = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    borderRadius: "6px",
  };

  const numberBaseStyle: CSSObject = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `0 ${theme.spacing.spacing10}`,
    borderRadius: theme.radius.radius100,
  };

  const bulletBaseStyle: CSSObject = {
    borderRadius: theme.radius.radius100,
  };

  const styleMap = {
    text: {
      small: {
        ...textBaseStyle,
        width: "16px",
        height: "16px",
      },
      medium: {
        ...textBaseStyle,
        width: "20px",
        height: "20px",
      },
      large: {
        ...textBaseStyle,
        width: "24px",
        height: "24px",
      },
    },
    number: {
      small: {
        ...numberBaseStyle,
        height: "16px",
      },
      medium: {
        ...numberBaseStyle,
        height: "20px",
      },
      large: {
        ...numberBaseStyle,
        height: "24px",
      },
    },
    bullet: {
      small: {
        ...bulletBaseStyle,
        width: "8px",
        height: "8px",
      },
      medium: {
        ...bulletBaseStyle,
        width: "16px",
        height: "16px",
      },
      large: {
        ...bulletBaseStyle,
        width: "20px",
        height: "20px",
      },
      xLarge: {
        ...bulletBaseStyle,
        width: "24px",
        height: "24px",
      },
    },
  };

  return styleMap[type][size];
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
