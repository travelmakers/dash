import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./Search";
import useStyles from "./Search.style";

type SearchStylesNames = ClassNames<typeof useStyles>;

export type SearchType = "fill" | "line";

interface SharedSearchProps
  extends Props,
    TmComponentProps<SearchStylesNames> {}

export type SearchProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSearchProps>;

export type SearchComponent = <C extends React.ElementType = "input">(
  props: SearchProps<C>
) => React.ReactElement;
