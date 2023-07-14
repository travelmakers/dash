import {
  CSSObject,
  TmColor,
  TmFontSize,
  TmTheme,
  createStyles,
} from "@travelmakers/styles";
import { Props } from "../SelectDropBox/SelectDropBox";

export const SELECT_DROP_BOX_HEIGHT: Record<Props["type"], string> = {
  option: "44px",
  filter: "38px",
};

const SELECT_DROP_BOX_TRIGGER_COLOR: Record<Props["type"], TmColor> = {
  option: "primary2",
  filter: "primary",
};

const SELECT_DROP_BOX_TRIGGER_TYPOGRAPHY: Record<Props["type"], TmFontSize> = {
  option: "body2",
  filter: "subhead2",
};

const SELECT_DROP_BOX_TRIGGER_FONT_WEIGHT: Record<
  Props["type"],
  CSSObject["fontWeight"]
> = {
  option: "400",
  filter: "700",
};

const getBorderColor = (
  colors: TmTheme["colors"],
  showOptions: boolean,
  type: Props["type"]
) => {
  if (type === "filter") {
    if (showOptions) {
      return colors.primary;
    } else {
      return colors.transparent;
    }
  }

  return showOptions ? colors.primary : colors.outline;
};

const getTriggerColor = (
  colors: TmTheme["colors"],
  disabled: Props["disabled"],
  showPlaceholder: boolean,
  type: Props["type"]
) => {
  if (disabled) return showPlaceholder ? colors.primary4 : colors.primary3;

  return showPlaceholder
    ? colors.primary3
    : colors[SELECT_DROP_BOX_TRIGGER_COLOR[type]];
};

export default createStyles(
  (
    theme,
    {
      type,
      showOptions,
      showPlaceholder,
      disabled,
      direction,
    }: { showOptions: boolean; showPlaceholder: boolean } & Pick<
      Props,
      "type" | "disabled" | "direction"
    >
  ) => {
    const { colors, typography, spacing, radius } = theme;

    return {
      root: {
        ...(showPlaceholder
          ? typography.body2
          : typography[SELECT_DROP_BOX_TRIGGER_TYPOGRAPHY[type]]),
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: showOptions
          ? `calc(${SELECT_DROP_BOX_HEIGHT[type]} - 1px)`
          : SELECT_DROP_BOX_HEIGHT[type],
        padding: `0 ${spacing.spacing30}`,
        color: getTriggerColor(colors, disabled, showPlaceholder, type),
        fontWeight: showPlaceholder
          ? 400
          : SELECT_DROP_BOX_TRIGGER_FONT_WEIGHT[type],
        borderWidth: "1px",
        borderBottomWidth:
          direction === "forward" ? (showOptions ? 0 : "1px") : undefined,
        borderTopWidth: direction === "reverse" ? "1px" : undefined,
        borderStyle: "solid",
        borderColor: getBorderColor(colors, showOptions, type),
        borderTopColor:
          direction === "reverse"
            ? showOptions
              ? colors.transparent
              : colors.outline
            : undefined,
        borderRadius: showOptions
          ? direction === "forward"
            ? `${radius.radius20} ${radius.radius20} 0 0`
            : `0 0 ${radius.radius20} ${radius.radius20}`
          : radius.radius20,
        backgroundColor: !disabled ? colors.white : colors.surface,
      },
      content: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      icon: {
        transform: `rotate(${showOptions ? "180deg" : "0"})`,
        flexShrink: 0,
      },
    };
  }
);
