import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { View } from "../../View";
import { ProcessItem } from "../ProcessItem";
import useStyles from "./Process.style";
import {
  ProcessProps,
  ProcessStatus,
  ReturnType,
  SequenceType,
} from "./Process.type";

export interface Props {
  isBank?: boolean;
  status?: ProcessStatus;
}

const processing = (status: ProcessStatus) => {
  switch (status) {
    case "extend_purchase_before":
    case "reservation_purchase_before":
      return "before";
    case "reservation_purchase":
      return "ing";
    case "extend_purchase_done":
    case "reservation_purchase_done":
      return "done";
    default:
      return "";
  }
};

const sequence = (isBank: boolean, status: ProcessStatus): SequenceType[] => {
  const DEFAULT_SEQUENCE = [
    {
      process: "결제 완료",
      isProcessing: processing(status) === "ing",
    },
    {
      processor: "호텔에삶",
      process: "예약 전달",
      isProcessing: processing(status) === "done",
    },
    {
      processor: "호텔",
      process: "예약 확정",
      isProcessing: false,
    },
  ];

  return isBank
    ? [
        {
          process: "결제 대기",
          isProcessing: processing(status) === "before",
        },
        ...DEFAULT_SEQUENCE,
      ]
    : [...DEFAULT_SEQUENCE];
};

export const Process = forwardRef(
  <C extends React.ElementType = "ol">(
    { isBank = true, status, className, ...props }: ProcessProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    const items = sequence(isBank, status);
    const renderer = items.map((item, idx) => (
      <ProcessItem
        isBank={isBank}
        key={idx}
        item={item}
        hasIcon={idx + 1 !== items.length}
      />
    ));

    return (
      <View<React.ElementType>
        component={"ol"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        {renderer}
      </View>
    );
  }
) as unknown as ReturnType;

Process.displayName = "Process";
