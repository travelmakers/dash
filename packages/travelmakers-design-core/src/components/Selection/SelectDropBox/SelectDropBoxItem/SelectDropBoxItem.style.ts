import { CoSpacing, TmColor, createStyles } from "@travelmakers/styles";
import { Props } from "../SelectDropBox/SelectDropBox";

const SELECT_DROP_BOX_SPACING: Record<Props["type"], CoSpacing> = {
  option: "spacing20",
  filter: "spacing10",
};

const SELECT_DROP_BOX_ITEM_COLOR: Record<Props["type"], TmColor> = {
  option: "primaryInteract",
  filter: "primary3",
};

export default createStyles(
  (
    theme,
    { type, isSelected }: { isSelected: boolean } & Pick<Props, "type">
  ) => {
    const { typography, colors, spacing } = theme;

    return {
      root: {
        ...typography.body2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        rowGap: spacing[SELECT_DROP_BOX_SPACING[type]],
        color: !isSelected
          ? colors.primary
          : colors[SELECT_DROP_BOX_ITEM_COLOR[type]],
        padding: `${spacing[SELECT_DROP_BOX_SPACING[type]]} ${
          spacing.spacing30
        }`,
        paddingTop: 0,
        cursor: "pointer",
        height: type === "option" ? "44px" : "38px",

        "&:hover": {
          color: colors[SELECT_DROP_BOX_ITEM_COLOR[type]],
        },
      },
      content: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    };
  }
);
