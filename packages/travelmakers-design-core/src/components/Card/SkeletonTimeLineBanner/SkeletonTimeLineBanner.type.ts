import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./SkeletonTimeLineBanner";
import useStyles from "./SkeletonTimeLineBanner.style";

type SkeletonTimeLineBannerStylesNames = ClassNames<typeof useStyles>;

interface SharedSkeletonTimeLineBannerProps
  extends Props,
    TmComponentProps<SkeletonTimeLineBannerStylesNames> {}

export type SkeletonTimeLineBannerProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSkeletonTimeLineBannerProps>;

export type SkeletonTimeLineBannerComponent = <
  C extends React.ElementType = "div"
>(
  props: SkeletonTimeLineBannerProps<C>
) => React.ReactElement;
