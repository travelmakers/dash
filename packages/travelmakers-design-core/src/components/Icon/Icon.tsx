import { TmComponentProps } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { IconProps, IconTypes, ReturnType } from "./Icon.type";
import * as AssetComponent from "./_components/assets";

export interface Props extends TmComponentProps {
  src: IconTypes;
}

export const Icon = forwardRef(
  <C extends React.ElementType = "svg">({ src, ...props }: IconProps<C>) => {
    return <>{React.createElement(AssetComponent[src], props)}</>;
  }
) as unknown as ReturnType;

Icon.displayName = "Icon";
