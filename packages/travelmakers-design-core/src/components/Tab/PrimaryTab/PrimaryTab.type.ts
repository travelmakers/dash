import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./PrimaryTab";
import useStyles from "./PrimaryTab.style";

type PrimaryTabStylesNames = ClassNames<typeof useStyles>;

interface SharedPrimaryTabProps
  extends Props,
    TmComponentProps<PrimaryTabStylesNames> {}

export type PrimaryTabProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedPrimaryTabProps>;

export type PrimaryTabComponent = <C extends React.ElementType = "ul">(
  props: PrimaryTabProps<C>
) => React.ReactElement;
