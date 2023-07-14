import { CoSpacing, TmColor, createStyles } from "@travelmakers/styles";
import { Props } from "../SelectDropBox/SelectDropBox";
import { SELECT_DROP_BOX_HEIGHT } from "../SelectDropBoxTrigger/SelectDropBoxTrigger.style";

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
    {
      type,
      isSelected,
      direction,
    }: { isSelected: boolean } & Pick<Props, "type" | "direction">
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
        paddingTop: direction === "forward" ? 0 : undefined,
        paddingBottom: direction === "reverse" ? "1px" : undefined,
        cursor: "pointer",
        height: SELECT_DROP_BOX_HEIGHT[type],

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
