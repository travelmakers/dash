import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./Callout";
import useStyles from "./Callout.style";

export type CalloutType = "default" | "warning";

type CalloutStylesNames = ClassNames<typeof useStyles>;

interface SharedCalloutProps
  extends Props,
    TmComponentProps<CalloutStylesNames> {}

export type CalloutProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedCalloutProps>;

type CalloutComponent = <C extends React.ElementType = "dl">(
  props: CalloutProps<C>
) => React.ReactElement;

export type ReturnType = CalloutComponent & {
  displayName?: string;
};
