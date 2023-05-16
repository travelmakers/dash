import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Button } from "../../Button";
import { Props } from "./ModalFullPageFooter";
import useStyles from "./ModalFullPageFooter.style";

type ModalFullPageFooterStylesNames = ClassNames<typeof useStyles>;

interface SharedModalFullPageFooterProps
  extends Props,
    TmComponentProps<ModalFullPageFooterStylesNames> {}

export type ModalFullPageFooterProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedModalFullPageFooterProps>;

type ModalFullPageFooterComponent = <
  C extends React.ElementType = typeof Button
>(
  props: ModalFullPageFooterProps<C>
) => React.ReactElement;

export type ReturnType = ModalFullPageFooterComponent & {
  displayName?: string;
};
