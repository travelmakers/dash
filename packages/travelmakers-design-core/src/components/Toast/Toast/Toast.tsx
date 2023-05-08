import React from "react";
import { Icon } from "../../Icon";
import { IconTypes } from "../../Icon/Icon.type";
import useStyles from "./Toast.style";
import { ToastAlignType, ToastIconType } from "./Toast.type";

export interface Props {
  type?: ToastIconType;
  text: string;
  align?: ToastAlignType;
}

const TOAST_ICON: { [key in ToastIconType]: IconTypes } = {
  success: "IcResultSuccess",
  error: "IcResultFail",
};

export const Toast = ({ type, text, align }: Props) => {
  const { classes } = useStyles({ align });

  return (
    <div className={classes.root}>
      {type && (
        <Icon
          className={classes.icon}
          src={TOAST_ICON[type]}
          width={24}
          height={24}
        />
      )}
      <p className={classes.text}>{text}</p>
    </div>
  );
};
