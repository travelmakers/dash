import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./Typography";
import useStyles from "./Typography.style";

export type TypographyTextAlign = "left" | "center" | "right";

type TypographyStylesNames = ClassNames<typeof useStyles>;

interface SharedTypographyProps
  extends Props,
    TmComponentProps<TypographyStylesNames> {}

export type TypographyProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedTypographyProps>;

export type TypographyComponent = <C extends React.ElementType = "span">(
  props: TypographyProps<C>
) => React.ReactElement;
