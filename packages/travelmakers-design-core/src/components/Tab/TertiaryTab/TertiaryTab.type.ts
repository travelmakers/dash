import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { TertiaryTabItem } from "../TertiaryTabItem";
import { Props } from "./TertiaryTab";
import useStyles from "./TertiaryTab.style";

type TertiaryTabStylesNames = ClassNames<typeof useStyles>;

interface SharedTertiaryTabProps
  extends Props,
    TmComponentProps<TertiaryTabStylesNames> {}

export type TertiaryTabProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedTertiaryTabProps>;

export type TertiaryTabComponent = <C extends React.ElementType = "fieldset">(
  props: TertiaryTabProps<C>
) => React.ReactElement;

export type ReturnType = TertiaryTabComponent & {
  displayName?: string;
  Item: typeof TertiaryTabItem;
};
