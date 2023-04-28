import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
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
