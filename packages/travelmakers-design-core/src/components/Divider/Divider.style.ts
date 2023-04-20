import { TmColor, createStyles } from "@travelmakers-design-v2/styles";
import { Props } from "./Divider";

const getStyles = (
  colors: Record<TmColor, string>,
  type: Props["type"],
  width: Props["width"],
  height: Props["height"],
  color: Props["color"]
) => {
  const commonStyles = {
    backgroundColor: colors[color],
  };

  const horizontalStyles = {
    width: width ?? "100%",
    height: height ?? "1px",
  };

  const verticalStyles = {
    width: width ?? "1px",
    height: height ?? "100%",
  };

  const stylesByType = {
    horizontal: horizontalStyles,
    vertical: verticalStyles,
  };

  return stylesByType[type] ? { ...commonStyles, ...stylesByType[type] } : null;
};

export default createStyles((theme, { type, width, height, color }: Props) => {
  const { colors } = theme;

  return {
    root: { ...getStyles(colors, type, width, height, color) },
  };
});
