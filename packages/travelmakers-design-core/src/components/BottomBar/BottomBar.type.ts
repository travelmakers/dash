import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./BottomBar";
import useStyles from "./BottomBar.style";

type BottomBarStylesNames = ClassNames<typeof useStyles>;

interface SharedBottomBarProps
  extends Props,
    TmComponentProps<BottomBarStylesNames> {}

export type BottomBarProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedBottomBarProps>;

type BottomBarComponent = <C extends React.ElementType = "div">(
  props: BottomBarProps<C>
) => React.ReactElement;

export type ReturnType = BottomBarComponent & { displayName?: string };
