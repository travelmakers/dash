import { createStyles } from "@travelmakers/styles";
import { Props } from "./ModalPopup";

export default createStyles((theme, { content }: Pick<Props, "content">) => {
  const { colors, shadows, spacing, typography } = theme;

  return {
    root: {
      position: "fixed",
      zIndex: 101,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(8px)",
    },
    dialog: {
      position: "fixed",
      zIndex: 100,
      top: "50%",
      left: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      rowGap: spacing.spacing30,
      width: "328px",
      height: "174px",
      margin: 0,
      padding: spacing.spacing30,
      transform: "translate(-50%, -50%)",
      filter: `drop-shadow(${shadows.elevation5})`,
      border: 0,
      borderRadius: "12px",
      backgroundColor: colors.white,
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
