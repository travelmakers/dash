import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./ModalFullPageFooter";
import useStyles from "./ModalFullPageFooter.style";

type ModalFullPageFooterStylesNames = ClassNames<typeof useStyles>;

interface SharedModalFullPageFooterProps
  extends Props,
    TmComponentProps<ModalFullPageFooterStylesNames> {}

export type ModalFullPageFooterProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedModalFullPageFooterProps>;

export type ModalFullPageFooterComponent = <
  C extends React.ElementType = "button"
>(
  props: ModalFullPageFooterProps<C>
) => React.ReactElement;
