import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { SelectRadioItem } from "../SelectRadioItem";
import { Props } from "./SelectRadio";
import useStyles from "./SelectRadio.style";

type SelectRadioStylesNames = ClassNames<typeof useStyles>;

interface SharedSelectRadioProps
  extends Props,
    TmComponentProps<SelectRadioStylesNames> {}

export type SelectRadioProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectRadioProps>;

export type SelectRadioComponent = <C extends React.ElementType = "div">(
  props: SelectRadioProps<C>
) => React.ReactElement;

export type ReturnType = SelectRadioComponent & {
  displayName?: string;
  Item: typeof SelectRadioItem;
};
