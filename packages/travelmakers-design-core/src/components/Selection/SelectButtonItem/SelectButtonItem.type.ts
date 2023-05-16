import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./SelectButtonItem";
import useStyles from "./SelectButtonItem.style";

type SelectButtonItemStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectButtonItemProps
  extends Props,
    TmComponentProps<SelectButtonItemStylesNames> {}

export type SelectButtonItemProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectButtonItemProps>;

type SelectButtonItemComponent = <C extends React.ElementType = "input">(
  props: SelectButtonItemProps<C>
) => React.ReactElement;

export type ReturnType = SelectButtonItemComponent & {
  displayName?: string;
};
