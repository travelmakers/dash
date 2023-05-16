import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { PrimaryTabItem } from "../PrimaryTabItem";
import { Props } from "./PrimaryTab";
import useStyles from "./PrimaryTab.style";

type PrimaryTabStylesNames = ClassNames<typeof useStyles>;

interface SharedPrimaryTabProps
  extends Props,
    TmComponentProps<PrimaryTabStylesNames> {}

export type PrimaryTabProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedPrimaryTabProps>;

type PrimaryTabComponent = <C extends React.ElementType = "ul">(
  props: PrimaryTabProps<C>
) => React.ReactElement;

export type ReturnType = PrimaryTabComponent & {
  displayName?: string;
  Item: typeof PrimaryTabItem;
};
