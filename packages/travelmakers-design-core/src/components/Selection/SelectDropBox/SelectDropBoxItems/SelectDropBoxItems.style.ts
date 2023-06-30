import { createStyles } from "@travelmakers/styles";
import { Props } from "../SelectDropBox/SelectDropBox";
import { getBackgroundColor } from "../SelectDropBox/SelectDropBox.style";

const SELECT_DROP_BOX_MAX_HEIGHT: Record<Props["type"], string> = {
  option: "232px",
  filter: "158px",
};

export default createStyles(
  (theme, { type, disabled }: Pick<Props, "type" | "disabled">) => {
    const { colors, radius, shadows } = theme;

    return {
      root: {
        position: "absolute",
        top: "43px",
        left: 0,
        right: 0,
        padding: 0,
        maxHeight: SELECT_DROP_BOX_MAX_HEIGHT[type],
        border: `1px solid ${colors.primary}`,
        borderTop: 0,
        borderBottomLeftRadius: radius.radius20,
        borderBottomRightRadius: radius.radius20,
        boxShadow: shadows.elevation2,
        backgroundColor: getBackgroundColor(colors, disabled),
        overflowY: "scroll",
        zIndex: 1,
      },
    };
  }
);
