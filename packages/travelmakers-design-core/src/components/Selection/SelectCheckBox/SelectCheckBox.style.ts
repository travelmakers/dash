import { createStyles } from "@travelmakers/styles";
import { Props } from "./SelectCheckBox";
import { SelectCheckBoxType } from "./SelectCheckBox.type";

const SELECT_CHECK_BOX_HEIGHT: Record<SelectCheckBoxType, string> = {
  h40: "40px",
  h48: "48px",
};

export default createStyles(
  (
    theme,
    { type, hasBackgroundColor }: Pick<Props, "type" | "hasBackgroundColor">
  ) => {
    const { spacing, colors, radius } = theme;

    return {
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: spacing.spacing20,
        minHeight: SELECT_CHECK_BOX_HEIGHT[type],
        backgroundColor: hasBackgroundColor
          ? colors.surface
          : colors.transparent,
        borderRadius: radius.radius20,
        cursor: "pointer",
      },
      padding: { padding: `${spacing.spacing20} ${spacing.spacing30}` },
    };
  }
);
