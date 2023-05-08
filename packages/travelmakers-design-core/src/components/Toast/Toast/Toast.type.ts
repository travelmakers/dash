import { ClassNames, TmComponentProps } from "@travelmakers/styles";
import { Props } from "./Toast";
import useStyles from "./Toast.style";

type ToastStylesNames = ClassNames<typeof useStyles>;
export type ToastAlignType = "left" | "center" | "right";
export type ToastIconType = "success" | "error";

export type ToastProps = Props & TmComponentProps<ToastStylesNames>;
