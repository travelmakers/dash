import {
  CSSObject,
  TmColor,
  TmFontSize,
  TmTheme,
  createStyles,
} from "@travelmakers-design-v2/styles";
import { Props } from "../SelectDropBox/SelectDropBox";
import { SELECT_DROP_BOX_HEIGHT } from "../SelectDropBox/SelectDropBox.style";

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
    }: { showOptions: boolean; showPlaceholder: boolean } & Pick<
      Props,
      "type" | "disabled"
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
        height: SELECT_DROP_BOX_HEIGHT[type],
        padding: `0 ${spacing.spacing30}`,
        color: getTriggerColor(colors, disabled, showPlaceholder, type),
        fontWeight: showPlaceholder
          ? 400
          : SELECT_DROP_BOX_TRIGGER_FONT_WEIGHT[type],
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: showOptions ? colors.transparent : colors.outline,
        borderRadius: radius.radius20,
        zIndex: 2,
      },
      icon: {
        transform: `rotate(${showOptions ? "180deg" : "0"})`,
      },
    };
  }
);
