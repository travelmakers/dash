import { SequenceType } from "../Process/Process.type";
import { ProcessIcon } from "../ProcessIcon";
import useStyles from "./ProcessItem.style";
import React from "react";

export interface Props {
  item: SequenceType;
  hasIcon: boolean;
}

export const ProcessItem = ({ item, hasIcon }: Props) => {
  const { processor, process, isProcessing } = item;
  const { classes, cx } = useStyles({ isProcessing, hasIcon });

  return (
    <li className={classes.root}>
      <div
        className={cx(classes.process, { "process-line-height": processor })}
      >
        {processor && <span className={classes.processor}>{processor}</span>}
        {process}
      </div>
      {hasIcon && <ProcessIcon isProcessing={isProcessing} />}
    </li>
  );
};
