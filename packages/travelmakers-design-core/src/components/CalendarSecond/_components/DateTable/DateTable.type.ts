import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./DateTable";
import useStyles from "./DateTable.style";

type DateTableStylesNames = ClassNames<typeof useStyles>;

interface SharedDateTableProps
  extends Props,
    TmComponentProps<DateTableStylesNames> {}

export type DateTableProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDateTableProps>;

type DateTableComponent = <C extends React.ElementType = "div">(
  props: DateTableProps<C>
) => React.ReactElement;

export type ReturnType = DateTableComponent & {
  displayName?: string;
};
