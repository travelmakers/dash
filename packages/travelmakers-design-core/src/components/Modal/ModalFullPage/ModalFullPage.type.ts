import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { ModalFullPageFooter } from "../ModalFullPageFooter";
import { Props } from "./ModalFullPage";
import useStyles from "./ModalFullPage.style";

type ModalFullPageStylesNames = ClassNames<typeof useStyles>;

interface SharedModalFullPageProps
  extends Props,
    TmComponentProps<ModalFullPageStylesNames> {}

export type ModalFullPageProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedModalFullPageProps>;

export type ModalFullPageComponent = <C extends React.ElementType = "dialog">(
  props: ModalFullPageProps<C>
) => React.ReactElement;

export type ReturnType = ModalFullPageComponent & {
  displayName?: string;
  Footer: typeof ModalFullPageFooter;
};
