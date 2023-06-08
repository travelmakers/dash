import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./OptionCard";
import useStyles from "./OptionCard.style";
import { Price, PriceProps } from "../../Price";

type OptionCardStylesNames = ClassNames<typeof useStyles>;

interface SharedOptionCardProps
  extends Props,
    TmComponentProps<OptionCardStylesNames> {}

export type OptionCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedOptionCardProps>;

type OptionCardComponent = <C extends React.ElementType = "div">(
  props: OptionCardProps<C>
) => React.ReactElement;

export interface OptionCardPrice extends PriceProps<typeof Price> {
  secondaryPriceText?: number;
  secondaryDisabled?: boolean;
}

export type ReturnType = OptionCardComponent & {
  displayName?: string;
};
