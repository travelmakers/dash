import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./SelectCheckBox";
import useStyles from "./SelectCheckBox.style";

type SelectCheckBoxStylesNames = ClassNames<typeof useStyles>;

export type SelectCheckBoxType = "h40" | "h48";

interface SharedSelectCheckBoxProps
  extends Props,
    TmComponentProps<SelectCheckBoxStylesNames> {}

export type SelectCheckBoxProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectCheckBoxProps>;

export type SelectCheckBoxComponent = <C extends React.ElementType = "div">(
  props: SelectCheckBoxProps<C>
) => React.ReactElement;
