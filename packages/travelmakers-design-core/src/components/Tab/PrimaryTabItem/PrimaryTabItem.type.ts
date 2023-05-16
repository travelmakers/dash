import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./PrimaryTabItem";
import useStyles from "./PrimaryTabItem.style";

type PrimaryTabItemStylesNames = ClassNames<typeof useStyles>;

interface SharedPrimaryTabItemProps
  extends Props,
    TmComponentProps<PrimaryTabItemStylesNames> {}

export type PrimaryTabItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedPrimaryTabItemProps>;

type PrimaryTabItemComponent = <C extends React.ElementType = "input">(
  props: PrimaryTabItemProps<C>
) => React.ReactElement;

export type ReturnType = PrimaryTabItemComponent & {
  displayName?: string;
};
