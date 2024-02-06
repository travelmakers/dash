import { SequenceType } from "../Process/Process.type";
import { ProcessIcon } from "../ProcessIcon";
import useStyles from "./ProcessItem.style";
import React from "react";

export interface Props {
  item: SequenceType;
  hasIcon: boolean;
  locale?: "ko" | "en";
}

export const ProcessItem = ({ item, hasIcon, locale }: Props) => {
  const { processor, process, isProcessing } = item;
  const { classes, cx } = useStyles({ isProcessing });

  return (
    <li className={classes.root}>
      <div
        className={cx(locale === "ko" ? classes.process : classes.processEn, {
          "process-line-height": processor,
        })}
      >
        {processor && <span className={classes.processor}>{processor}</span>}
        {process}
      </div>
      {hasIcon && <ProcessIcon isProcessing={isProcessing} />}
    </li>
  );
};
