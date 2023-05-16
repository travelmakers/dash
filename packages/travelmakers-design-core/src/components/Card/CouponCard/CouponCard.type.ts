import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./CouponCard";
import useStyles from "./CouponCard.style";

type CouponCardStylesNames = ClassNames<typeof useStyles>;

interface SharedCouponCardProps
  extends Props,
    TmComponentProps<CouponCardStylesNames> {}

export type CouponCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedCouponCardProps>;

type CouponCardComponent = <C extends React.ElementType = "div">(
  props: CouponCardProps<C>
) => React.ReactElement;

export type ReturnType = CouponCardComponent & {
  displayName?: string;
};
