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

type LocalizedTimeLineParams = "ko" | "en";

export interface Props {
  isBank?: boolean;
  status?: ProcessStatus;
  locale?: LocalizedTimeLineParams;
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

const sequence = (
  isBank: boolean,
  status: ProcessStatus,
  locale?: LocalizedTimeLineParams
): SequenceType[] => {
  const DEFAULT_SEQUENCE = [
    {
      process: locale === "en" ? "Completing a payment" : "결제 완료",
      isProcessing: processing(status) === "ing",
    },
    {
      processor: locale === "en" ? "" : "호텔에삶",
      process: locale === "en" ? "Delivering a reservation" : "예약 전달",
      isProcessing: processing(status) === "done",
    },
    {
      processor: locale === "en" ? "" : "호텔",
      process: locale === "en" ? "Confirming a reservation" : "예약 확정",
      isProcessing: false,
    },
  ];

  return isBank
    ? [
        {
          process: locale === "en" ? "Pending payment" : "결제 대기",
          isProcessing: processing(status) === "before",
        },
        ...DEFAULT_SEQUENCE,
      ]
    : DEFAULT_SEQUENCE;
};

export const Process = forwardRef(
  <C extends React.ElementType = "ol">(
    {
      isBank = true,
      status,
      locale = "ko",
      className,
      ...props
    }: ProcessProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    const items = sequence(isBank, status, locale);
    const renderer = items.map((item, idx) => (
      <ProcessItem
        key={idx}
        item={item}
        hasIcon={idx + 1 !== items.length}
        locale={locale}
      />
    ));

    return (
      <View<React.ElementType>
        component={"ol"}
        ref={ref}
        className={cx(
          locale === "ko" ? classes.root : classes.rootEn,
          className
        )}
        {...props}
      >
        {renderer}
      </View>
    );
  }
) as unknown as ReturnType;

Process.displayName = "Process";
