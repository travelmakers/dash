import {
  Toaster as DefaultToaster,
  ToastBar,
  ToasterProps,
} from "react-hot-toast";
import React from "react";
import useStyles from "./Toaster.style";

export interface Props extends ToasterProps {}

export const Toaster = ({ ...props }) => {
  const { duration = 2000, ...rest } = props;
  const { classes } = useStyles();

  return (
    <DefaultToaster
      toastOptions={{ className: classes.toast, duration }}
      {...rest}
    >
      {(t) => (
        <ToastBar toast={t} style={{ padding: 0 }}>
          {({ message }) => <>{message}</>}
        </ToastBar>
      )}
    </DefaultToaster>
  );
};
