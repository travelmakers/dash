import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./ModalPopup";
import useStyles from "./ModalPopup.style";

type ModalPopupStylesNames = ClassNames<typeof useStyles>;

interface SharedModalPopupProps
  extends Props,
    TmComponentProps<ModalPopupStylesNames> {}

export type ModalPopupProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedModalPopupProps>;

export type ModalPopupComponent = <C extends React.ElementType = "div">(
  props: ModalPopupProps<C>
) => React.ReactElement;
