import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./ModalSelect";
import useStyles from "./ModalSelect.style";

type ModalPopupStylesNames = ClassNames<typeof useStyles>;

interface SharedModalSelectProps
  extends Props,
    TmComponentProps<ModalPopupStylesNames> {}

export type ModalSelectProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedModalSelectProps>;
