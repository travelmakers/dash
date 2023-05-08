import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./Process";
import useStyles from "./Process.style";

export type ProcessStatus =
  | "reservation_purchase_before"
  | "extend_purchase_before"
  | "extend_purchase_done"
  | "reservation_purchase_done";

export type SequenceType = {
  processor?: string;
  process: string;
  isProcessing: boolean;
};

type ProcessStylesNames = ClassNames<typeof useStyles>;

interface SharedProcessProps
  extends Props,
    TmComponentProps<ProcessStylesNames> {}

export type ProcessProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedProcessProps>;

export type ProcessComponent = <C extends React.ElementType = "ol">(
  props: ProcessProps<C>
) => React.ReactElement;
