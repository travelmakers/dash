import {
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import React, { PropsWithChildren, forwardRef } from "react";
import { IconTypes } from "./Type";

import * as AssetComponent from "./_components/assets";

export interface Props extends TmComponentProps {
  src: IconTypes;
}

export interface SharedIconProps extends Props {}

export type IconProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedIconProps
>;

type IconComponent = <C extends React.ElementType = "svg">(
  props: IconProps<C>
) => React.ReactElement;

export const Icon: IconComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "svg">(
    { src, children, ...props }: PropsWithChildren<IconProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    return <>{React.createElement(AssetComponent[src], props)}</>;
  }
);

Icon.displayName = "Icon";
