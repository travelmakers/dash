import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { SelectTagItem } from "../SelectTagItem/SelectTagItem";
import { Props } from "./SelectTag";
import useStyles from "./SelectTag.style";

type SelectTagStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectTagProps
  extends Props,
    TmComponentProps<SelectTagStylesNames> {}

export type SelectTagProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectTagProps>;

type SelectTagComponent = <C extends React.ElementType = "fieldset">(
  props: SelectTagProps<C>
) => React.ReactElement;

export type ReturnType = SelectTagComponent & {
  displayName?: string;
  Item: typeof SelectTagItem;
};
