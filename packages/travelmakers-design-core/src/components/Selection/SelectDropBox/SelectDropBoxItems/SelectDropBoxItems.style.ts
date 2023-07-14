import { CoRadius, TmTheme, createStyles } from "@travelmakers/styles";
import { Props } from "../SelectDropBox/SelectDropBox";
import { getBackgroundColor } from "../SelectDropBox/SelectDropBox.style";

const SELECT_DROP_BOX_MAX_HEIGHT: Record<Props["type"], string> = {
  option: "232px",
  filter: "192px",
};

const getStyles = (
  type: Props["type"],
  radius: TmTheme["radius"],
  colors: TmTheme["colors"],
  direction: Props["direction"]
) => {
  const { radius20 } = radius;
  const position = type === "option" ? "43px" : "37px";
  const border = `1px solid ${colors.primary}`;

  const borderRadiusProperties = {
    forward: {
      top: position,
      border,
      borderTop: 0,
      borderBottomLeftRadius: radius20,
      borderBottomRightRadius: radius20,
    },
    reverse: {
      bottom: position,
      border,
      borderBottom: 0,
      borderTopLeftRadius: radius20,
      borderTopRightRadius: radius20,
    },
  };

  return borderRadiusProperties[direction] || {};
};

export default createStyles(
  (
    theme,
    {
      type,
      disabled,
      direction,
    }: Pick<Props, "type" | "disabled" | "direction">
  ) => {
    const { colors, radius, shadows } = theme;

    return {
      root: {
        ...getStyles(type, radius, colors, direction),
        position: "absolute",
        left: 0,
        right: 0,
        padding: 0,
        maxHeight: SELECT_DROP_BOX_MAX_HEIGHT[type],
        boxShadow:
          direction === "forward"
            ? "rgba(0, 0, 0, 0.15) 0px 8px 8px"
            : "rgba(0, 0, 0, 0.15) 0px -4px 12px",
        backgroundColor: getBackgroundColor(colors, disabled),
        overflowY: "scroll",
        zIndex: 1,
      },
    };
  }
);
