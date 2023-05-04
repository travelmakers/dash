import { createStyles } from "@travelmakers-design-v2/styles";
import { Props } from "../SelectDropBox/SelectDropBox";
import {
  SELECT_DROP_BOX_HEIGHT,
  getBackgroundColor,
} from "../SelectDropBox/SelectDropBox.style";

export default createStyles(
  (theme, { type, disabled }: Pick<Props, "type" | "disabled">) => {
    const { colors, radius, shadows } = theme;

    return {
      root: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        paddingTop: SELECT_DROP_BOX_HEIGHT[type],
        border: `1px solid ${colors.primary}`,
        borderRadius: radius.radius20,
        boxShadow: shadows.elevation2,
        backgroundColor: getBackgroundColor(colors, disabled),
        zIndex: 1,
      },
    };
  }
);
