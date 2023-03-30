import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { createContext, forwardRef, PropsWithChildren } from "react";
import { View } from "../../View";
import { AccordionItem } from "../AccordionItem";
import useStyles from "./Accordion.style";

export type AccordionType = "small" | "medium";

export const AccordionContext = createContext<{
  type: AccordionType;
  gap: number;
}>({ type: "small", gap: 4 });
AccordionContext.displayName = "AccordionContext";

export type AccordionStylesNames = ClassNames<typeof useStyles>;

export type Props = {
  gap?: number;
  type?: AccordionType;
};

export interface SharedAccordionProps
  extends Props,
    TmComponentProps<AccordionStylesNames> {}

export type AccordionProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedAccordionProps>;

type AccordionComponent = <C extends React.ElementType = "dl">(
  props: AccordionProps<C>
) => React.ReactElement;

export const Accordion: AccordionComponent & {
  displayName?: string;
  Item?: typeof AccordionItem;
} = forwardRef(
  <C extends React.ElementType = "dl">(
    {
      gap = 4,
      type = "small",
      className,
      children,
      ...props
    }: PropsWithChildren<AccordionProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <AccordionContext.Provider value={{ type, gap }}>
        <View<React.ElementType>
          component={"dl"}
          ref={ref}
          className={cx(classes.root, className)}
          {...props}
        >
          {children}
        </View>
      </AccordionContext.Provider>
    );
  }
);

Accordion.Item = AccordionItem;
Accordion.displayName = "Accordion";
