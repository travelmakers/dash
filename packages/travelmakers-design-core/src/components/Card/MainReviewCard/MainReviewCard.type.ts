import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./MainReviewCard";
import useStyles from "./MainReviewCard.style";

type MainReviewCardStylesNames = ClassNames<typeof useStyles>;

interface SharedMainReviewCardProps
  extends Props,
    TmComponentProps<MainReviewCardStylesNames> {}

export type MainReviewCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedMainReviewCardProps>;

type MainReviewCardComponent = <C extends React.ElementType = "div">(
  props: MainReviewCardProps<C>
) => React.ReactElement;

export type ReturnType = MainReviewCardComponent & {
  displayName?: string;
};
