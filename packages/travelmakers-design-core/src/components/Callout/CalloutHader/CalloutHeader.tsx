import React from "react";
import { TmColor, useTmTheme } from "@travelmakers/styles";
import { Icon } from "../../Icon";
import { CalloutType } from "../Callout/Callout.type";
import useStyles from "./CalloutHeader.style";

export interface Props {
  type: CalloutType;
  title: string;
}

export const CALLOUT_COLOR: Record<CalloutType, TmColor> = {
  default: "secondary",
  warning: "error",
};

export const CalloutHeader = ({ type, title, ...props }: Props) => {
  const { colors } = useTmTheme();
  const { classes, cx } = useStyles({ type });

  return (
    <dt className={cx(classes.root)} {...props}>
      <Icon
        src="IcAlert"
        width={14}
        height={14}
        color={colors[CALLOUT_COLOR[type]]}
      />
      {title}
    </dt>
  );
};

CalloutHeader.displayName = "CalloutHeader";
