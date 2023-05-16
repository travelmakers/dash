import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./HeaderSection";
import useStyles from "./HeaderSection.style";

export type HeaderSectionType = "navy" | "white";

type HeaderSectionStylesNames = ClassNames<typeof useStyles>;

interface SharedHeaderSectionProps
  extends Props,
    TmComponentProps<HeaderSectionStylesNames> {}

export type HeaderSectionProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedHeaderSectionProps>;

type HeaderSectionComponent = <C extends React.ElementType = "header">(
  props: HeaderSectionProps<C>
) => React.ReactElement;

export type ReturnType = HeaderSectionComponent & {
  displayName?: string;
};
