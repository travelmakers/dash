import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./ModalFullPage";
import useStyles from "./ModalFullPage.style";

type ModalFullPageStylesNames = ClassNames<typeof useStyles>;

interface SharedModalFullPageProps
  extends Props,
    TmComponentProps<ModalFullPageStylesNames> {}

export type ModalFullPageProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedModalFullPageProps>;
