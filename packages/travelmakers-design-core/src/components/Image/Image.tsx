import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { forwardRef, PropsWithChildren } from "react";
import useStyles from "./Image.style";
import BaseImage from "next/image";
import type { ImageProps as BaseImageProps } from "next/image";
import { View } from "../View";

export type ImageStylesNames = ClassNames<typeof useStyles>;

export interface Props extends BaseImageProps {}
export interface SharedImageProps
  extends Props,
    TmComponentProps<ImageStylesNames> {}

export type ImageProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedImageProps
>;

type ImageComponent = <C extends React.ElementType = "img">(
  props: ImageProps<C>
) => React.ReactElement;

export const Image: ImageComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "img">(
    { className, children, ...props }: PropsWithChildren<ImageProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType> component={"div"}>
        <BaseImage
          ref={ref}
          src={props.src}
          alt={props.alt}
          className={cx(className, classes.image)}
          {...props}
        />
      </View>
    );
  }
);

Image.displayName = "Image";
