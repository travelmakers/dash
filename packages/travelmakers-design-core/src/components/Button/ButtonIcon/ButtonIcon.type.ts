import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./ButtonIcon";
import useStyles from "./ButtonIcon.style";

type ButtonIconStylesNames = ClassNames<typeof useStyles>;

interface SharedButtonIconProps
  extends Props,
    TmComponentProps<ButtonIconStylesNames> {}

export type ButtonIconProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedButtonIconProps>;

type ButtonIconComponent = <C extends React.ElementType = "button">(
  props: ButtonIconProps<C>
) => React.ReactElement;

export type ReturnType = ButtonIconComponent & {
  displayName?: string;
};
