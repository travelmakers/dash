import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import { ProcessItem } from "../ProcessItem";
import useStyles from "./Process.style";
import {
  ProcessComponent,
  ProcessProps,
  ProcessStatus,
  SequenceType,
} from "./Process.type";

export interface Props {
  status: ProcessStatus;
}

const processing = (status: ProcessStatus) => {
  switch (status) {
    case "extend_purchase_before":
    case "reservation_purchase_before":
      return "before";
    case "extend_purchase_done":
    case "reservation_purchase_done":
      return "done";
  }
};

const sequence = (status: ProcessStatus): SequenceType[] => {
  return [
    {
      process: "결제 대기",
      isProcessing: processing(status) === "before",
    },
    {
      process: "결제 완료",
      isProcessing: false,
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
};

export const Process: ProcessComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "ol">(
    { status, className, ...props }: ProcessProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    const items = sequence(status);
    const renderer = items.map((item, idx) => (
      <ProcessItem key={idx} item={item} hasIcon={idx + 1 !== items.length} />
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
);

Process.displayName = "Process";
