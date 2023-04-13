import { Icon } from "@travelmakers-design-v2/core";
import { TmTheme, useTmTheme } from "@travelmakers-design-v2/styles";
import { Property } from "csstype";
import _toast from "react-hot-toast";
import { ToastOptions } from "react-hot-toast";
import { IconTypes } from "../../../travelmakers-design-core/src/components/Icon/Icon.type";

type ToastAlignType = "left" | "center" | "right";
type ToastIconType = "success" | "error";
type ToastProps = ToastOptions & {
  text: string;
  align?: ToastAlignType;
};

const TOAST_ALIGN: { [key in ToastAlignType]: Property.JustifyContent } = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};
const TOAST_ICON: { [key in ToastIconType]: IconTypes } = {
  success: "IcResultSuccess",
  error: "IcResultFail",
};

const getDefaultOptions = (theme: TmTheme) => {
  const { typography, colors, shadows } = theme;

  return {
    style: {
      ...typography.body2,
      width: "328px",
      padding: "11px 6px",
      color: colors.white,
      backgroundColor: colors.black30,
      boxShadow: shadows.elevation4,
    },
    duration: 2000,
  };
};
const getDefaultStyle = (align: ToastAlignType) => {
  return {
    display: "flex",
    justifyContent: TOAST_ALIGN[align ?? "center"],
    width: "100%",
  };
};

export const useToast = () => {
  const theme = useTmTheme();
  const { spacing } = theme;

  const toastGenerator = (
    { text, align, ...options }: ToastProps,
    iconType?: ToastIconType
  ) => {
    _toast(
      <div
        style={{
          ...getDefaultStyle(align),
          padding: "1px 0",
          wordBreak: "break-all",
        }}
      >
        {iconType && (
          <Icon
            src={TOAST_ICON[iconType]}
            width={24}
            height={24}
            style={{ flexShrink: 0, marginRight: spacing.spacing10 }}
          />
        )}
        <p style={{ margin: 0, wordBreak: "break-all" }}>{text}</p>
      </div>,
      { ...getDefaultOptions(theme), ...options }
    );
  };

  const toast = (props: ToastProps) => toastGenerator(props);
  const success = (props: ToastProps) => toastGenerator(props, "success");
  const error = (props: ToastProps) => toastGenerator(props, "error");

  return { toast, success, error };
};
