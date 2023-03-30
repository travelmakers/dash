import {
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import React from "react";
import { forwardRef, PropsWithChildren } from "react";
import { IconTypes } from "./Type";

import * as AssetCompanyComponent from "./_components/assets/company";
import * as AssetControlComponent from "./_components/assets/control";
import * as AssetLogoComponent from "./_components/assets/logo";
import * as AssetPictogramComponent from "./_components/assets/pictogram";

export interface Props extends TmComponentProps {
  type: IconTypes["type"];
  src: IconTypes["src"];
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
    {
      type,
      src,
      className,
      children,
      ...props
    }: PropsWithChildren<IconProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const TypeComponent = () => {
      try {
        switch (type) {
          case "company":
            return React.createElement(AssetCompanyComponent[src], props);
          case "control":
            return React.createElement(AssetControlComponent[src], props);
          case "logo":
            return React.createElement(AssetLogoComponent[src], props);
          case "pictogram":
            return React.createElement(AssetPictogramComponent[src], props);
          default:
            return null;
        }
      } catch (error) {
        return null;
      }
    };

    return <>{TypeComponent()}</>;
  }
);

Icon.displayName = "Icon";
