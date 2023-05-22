import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./SelectTagItem";
import useStyles from "./SelectTagItem.style";

type SelectTagItemStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectTagItemProps
  extends Props,
    TmComponentProps<SelectTagItemStylesNames> {}

export type SelectTagItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectTagItemProps>;

type SelectTagItemComponent = <C extends React.ElementType = "input">(
  props: SelectTagItemProps<C>
) => React.ReactElement;

export type ReturnType = SelectTagItemComponent & {
  displayName?: string;
};
