import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./Accordion";
import useStyles from "./Accordion.style";

export type AccordionType = "small" | "medium";

type AccordionStylesNames = ClassNames<typeof useStyles>;

interface SharedAccordionProps
  extends Props,
    TmComponentProps<AccordionStylesNames> {}

export type AccordionProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedAccordionProps>;

export type AccordionComponent = <C extends React.ElementType = "dl">(
  props: AccordionProps<C>
) => React.ReactElement;
