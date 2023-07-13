import { SequenceType } from "../Process/Process.type";
import { ProcessIcon } from "../ProcessIcon";
import useStyles from "./ProcessItem.style";
import React from "react";

export interface Props {
  item: SequenceType;
  hasIcon: boolean;
  isBank: boolean;
}

export const ProcessItem = ({ item, hasIcon, isBank }: Props) => {
  const { processor, process, isProcessing } = item;
  const { classes, cx } = useStyles({ isProcessing, hasIcon, isBank });

  return (
    <li className={classes.root}>
      <div
        className={cx(classes.process, { "process-line-height": processor })}
      >
        {processor && <span className={classes.processor}>{processor}</span>}
        {process}
      </div>
      {hasIcon && (
        <div className={classes.iconBox}>
          <ProcessIcon isProcessing={isProcessing} />
        </div>
      )}
    </li>
  );
};
