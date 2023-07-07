import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./ModalWrapper";
import useStyles from "./ModalWrapper.style";

type ModalWrapperStylesNames = ClassNames<typeof useStyles>;

interface SharedModalWrapperProps
  extends Props,
    TmComponentProps<ModalWrapperStylesNames> {}

export type ModalWrapperProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedModalWrapperProps>;

type ModalWrapperComponent = <C extends React.ElementType = "dialog">(
  props: ModalWrapperProps<C>
) => React.ReactElement;

export type ReturnType = ModalWrapperComponent & {
  displayName?: string;
};
