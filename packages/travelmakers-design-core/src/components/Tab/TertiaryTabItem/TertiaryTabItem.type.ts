import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./TertiaryTabItem";
import useStyles from "./TertiaryTabItem.style";

type TertiaryTabItemStylesNames = ClassNames<typeof useStyles>;

interface SharedTertiaryTabItemProps
  extends Props,
    TmComponentProps<TertiaryTabItemStylesNames> {}

export type TertiaryTabItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedTertiaryTabItemProps>;

export type TertiaryTabItemComponent = <C extends React.ElementType = "input">(
  props: TertiaryTabItemProps<C>
) => React.ReactElement;
