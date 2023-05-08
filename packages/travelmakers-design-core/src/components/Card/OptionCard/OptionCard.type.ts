import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./OptionCard";
import useStyles from "./OptionCard.style";

type OptionCardStylesNames = ClassNames<typeof useStyles>;

interface SharedOptionCardProps
  extends Props,
    TmComponentProps<OptionCardStylesNames> {}

export type OptionCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedOptionCardProps>;

export type OptionCardComponent = <C extends React.ElementType = "div">(
  props: OptionCardProps<C>
) => React.ReactElement;
