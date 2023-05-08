import { CSSObject, createStyles } from "@travelmakers-design-v2/styles";
import { Props } from "./Toast";
import { ToastAlignType } from "./Toast.type";

const TOAST_DEFAULT_MARGIN = {
  horizontal: "10px",
  vertical: "4px",
};

const TOAST_ALIGN: { [key in ToastAlignType]: CSSObject["justifyContent"] } = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

const getDefaultStyle = (align: ToastAlignType) => {
  return {
    display: "flex",
    justifyContent: TOAST_ALIGN[align ?? "center"],
  };
};

export default createStyles((theme, { align }: Pick<Props, "align">) => {
  const { typography, spacing } = theme;

  return {
    root: {
      ...getDefaultStyle(align),
      padding: `calc(${spacing.spacing30} - ${TOAST_DEFAULT_MARGIN["horizontal"]}) calc(${spacing.spacing30} - ${TOAST_DEFAULT_MARGIN["vertical"]})`,
      wordBreak: "break-all",
    },
    icon: { flexShrink: 0, marginRight: spacing.spacing10 },
    text: {
      ...typography.body2,
      margin: 0,
      wordBreak: "break-all",
    },
  };
});
