import { createStyles } from "@travelmakers/styles";
import { Props } from "./ModalPopup";

export default createStyles((theme, { content }: Pick<Props, "content">) => {
  const { colors, spacing, typography } = theme;

  return {
    modal: {
      width: "328px",
      minHeight: "174px",
      rowGap: spacing.spacing30,
      padding: spacing.spacing30,
      borderRadius: "12px",
    },
    title: {
      ...typography.subhead1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.onBackground,
      textAlign: "center",
      flex: content ? 0 : 1,
    },
    content: {
      ...typography.body2,
      display: "-webkit-box",
      margin: 0,
      color: colors.onBackground,
      textAlign: "center",
      textOverflow: "ellipsis",
      overflow: "hidden",
      "-webkit-line-clamp": "2",
      "-webkit-box-orient": "vertical",
    },
    buttons: {
      display: "flex",
      columnGap: spacing.spacing10,
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    button: {
      flex: 1,
    },
  };
});
