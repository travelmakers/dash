import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./PriceCard";
import useStyles from "./PriceCard.style";

type PriceCardStylesNames = ClassNames<typeof useStyles>;

interface SharedPriceCardProps
  extends Props,
    TmComponentProps<PriceCardStylesNames> {}

export type PriceCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedPriceCardProps>;

type PriceCardComponent = <C extends React.ElementType = "div">(
  props: PriceCardProps<C>
) => React.ReactElement;

export type StatusType = "active" | "disabled";

export type ReturnType = PriceCardComponent & {
  displayName?: string;
};
