import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./NavButton";
import useStyles from "./NavButton.style";

type NavButtonStylesNames = ClassNames<typeof useStyles>;

interface SharedNavButtonProps
  extends Props,
    TmComponentProps<NavButtonStylesNames> {}

export type NavButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedNavButtonProps>;

export type NavButtonComponent = <C extends React.ElementType = "button">(
  props: NavButtonProps<C>
) => React.ReactElement;
