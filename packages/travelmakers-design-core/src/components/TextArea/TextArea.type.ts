import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./TextArea";
import useStyles from "./TextArea.style";

type TextAreaStylesNames = ClassNames<typeof useStyles>;

interface SharedTextAreaProps
  extends Props,
    TmComponentProps<TextAreaStylesNames> {}

export type TextAreaProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedTextAreaProps>;

type TextAreaComponent = <C extends React.ElementType = "textarea">(
  props: TextAreaProps<C>
) => React.ReactElement;

export type ReturnType = TextAreaComponent & {
  displayName?: string;
};
