import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./Price";
import useStyles from "./Price.style";

type PriceStylesNames = ClassNames<typeof useStyles>;

interface SharedPriceProps extends Props, TmComponentProps<PriceStylesNames> {}

export type PriceProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedPriceProps
>;

type PriceComponent = <C extends React.ElementType = "div">(
  props: PriceProps<C>
) => React.ReactElement;

export type ReturnType = PriceComponent & {
  displayName?: string;
};
