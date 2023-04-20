import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./Divider";
import useStyles from "./Divider.style";

type DividerStylesNames = ClassNames<typeof useStyles>;

export type DividerType = "horizontal" | "vertical";

interface SharedDividerProps
  extends Props,
    TmComponentProps<DividerStylesNames> {}

export type DividerProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDividerProps>;

export type DividerComponent = <C extends React.ElementType = "div">(
  props: DividerProps<C>
) => React.ReactElement;
