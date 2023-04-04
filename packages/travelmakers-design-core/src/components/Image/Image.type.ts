import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import useStyles from "./Image.style";
import { Props } from "./Image";

export type ImageStylesNames = ClassNames<typeof useStyles>;

export interface SharedImageProps
  extends Props,
    TmComponentProps<ImageStylesNames> {}

export type ImageProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedImageProps
>;

export type ImageComponent = <C extends React.ElementType = "img">(
  props: ImageProps<C>
) => React.ReactElement;
