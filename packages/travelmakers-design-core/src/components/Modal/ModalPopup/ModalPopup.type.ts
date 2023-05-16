import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./ModalPopup";
import useStyles from "./ModalPopup.style";

type ModalPopupStylesNames = ClassNames<typeof useStyles>;

interface SharedModalPopupProps
  extends Props,
    TmComponentProps<ModalPopupStylesNames> {}

export type ModalPopupProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedModalPopupProps>;

type ModalPopupComponent = <C extends React.ElementType = "dialog">(
  props: ModalPopupProps<C>
) => React.ReactElement;

export type ReturnType = ModalPopupComponent & {
  displayName?: string;
};
