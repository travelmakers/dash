import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./TimeLineBanner";
import useStyles from "./TimeLineBanner.style";

type TimeLineBannerStylesNames = ClassNames<typeof useStyles>;

interface SharedTimeLineBannerProps
  extends Props,
    TmComponentProps<TimeLineBannerStylesNames> {}

export type TimeLineBannerProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedTimeLineBannerProps>;

type TimeLineBannerComponent = <C extends React.ElementType = "div">(
  props: TimeLineBannerProps<C>
) => React.ReactElement;

export type ReturnType = TimeLineBannerComponent & {
  displayName?: string;
};
