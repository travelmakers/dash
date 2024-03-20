import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./DateSearch";
import useStyles from "./DateSearch.style";

type SearchStylesNames = ClassNames<typeof useStyles>;

export type DateSearchType = "fill" | "line";

interface SharedSearchProps
  extends Props,
    TmComponentProps<SearchStylesNames> {}

export type SearchProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSearchProps>;

type SearchComponent = <C extends React.ElementType = "input">(
  props: SearchProps<C>
) => React.ReactElement;

export type ReturnType = SearchComponent & {
  displayName?: string;
};
