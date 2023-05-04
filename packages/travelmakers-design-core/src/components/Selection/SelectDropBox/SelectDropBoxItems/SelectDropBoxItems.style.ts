import { createStyles } from "@travelmakers-design-v2/styles";
import { Props } from "../SelectDropBox/SelectDropBox";
import {
  SELECT_DROP_BOX_HEIGHT,
  getBackgroundColor,
} from "../SelectDropBox/SelectDropBox.style";

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
        top: 0,
        left: 0,
        right: 0,
        maxHeight: SELECT_DROP_BOX_MAX_HEIGHT[type],
        paddingTop: `calc(${SELECT_DROP_BOX_HEIGHT[type]} - 2px)`,
        border: `1px solid ${colors.primary}`,
        borderRadius: radius.radius20,
        boxShadow: shadows.elevation2,
        backgroundColor: getBackgroundColor(colors, disabled),
        overflowY: "scroll",
        zIndex: 1,
      },
    };
  }
);
