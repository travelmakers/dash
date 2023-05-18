import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./SwiperArrowContainer";
import useStyles from "./SwiperArrowContainer.style";

type SwiperArrowContainerStylesNames = ClassNames<typeof useStyles>;

interface SharedSwiperArrowContainerProps
  extends Props,
    TmComponentProps<SwiperArrowContainerStylesNames> {}

export type SwiperArrowContainerProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSwiperArrowContainerProps>;

type SwiperArrowContainerComponent = <C extends React.ElementType = "div">(
  props: SwiperArrowContainerProps<C>
) => React.ReactElement;

export type ReturnType = SwiperArrowContainerComponent & {
  displayName?: string;
};
