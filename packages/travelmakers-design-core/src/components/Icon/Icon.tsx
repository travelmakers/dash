import { TmComponentProps } from "@travelmakers-design-v2/styles";
import React, { forwardRef } from "react";
import { IconTagComponent } from "../Tag/IconTag/IconTag.type";
import { IconProps, IconTypes } from "./Icon.type";
import * as AssetComponent from "./_components/assets";

export interface Props extends TmComponentProps {
  src: IconTypes;
}

export const Icon: IconTagComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "svg">({ src, ...props }: IconProps<C>) => {
    return <>{React.createElement(AssetComponent[src], props)}</>;
  }
);

Icon.displayName = "Icon";
