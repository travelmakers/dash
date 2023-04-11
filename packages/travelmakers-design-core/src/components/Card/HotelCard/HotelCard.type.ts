import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./HotelCard";
import useStyles from "./HotelCard.style";

type HotelCardStylesNames = ClassNames<typeof useStyles>;

interface SharedHotelCardProps
  extends Props,
    TmComponentProps<HotelCardStylesNames> {}

export type HotelCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedHotelCardProps>;

export type HotelCardComponent = <C extends React.ElementType = "div">(
  props: HotelCardProps<C>
) => React.ReactElement;

export type HotelType = "minihotel" | "residence";

export interface HotelCardType1 {
  type: "grade";
  star: number;
}
export interface HotelCardType2 {
  type: HotelType;
  star: null;
}

export type HotelCardType = HotelCardType1 | HotelCardType2;
