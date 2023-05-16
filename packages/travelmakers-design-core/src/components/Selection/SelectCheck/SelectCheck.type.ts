import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./SelectCheck";
import useStyles from "./SelectCheck.style";

type SelectCheckStylesNames = ClassNames<typeof useStyles>;

export type SelectCheckType = "small" | "medium";

interface SharedSelectCheckProps
  extends Props,
    TmComponentProps<SelectCheckStylesNames> {}

export type SelectCheckProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectCheckProps>;

type SelectCheckComponent = <C extends React.ElementType = "input">(
  props: SelectCheckProps<C>
) => React.ReactElement;

export type ReturnType = SelectCheckComponent & {
  displayName?: string;
};
