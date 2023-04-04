import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { PropsWithChildren, createContext, forwardRef } from "react";
import { View } from "../../View";
import { AccordionItem } from "../AccordionItem";
import useStyles from "./Accordion.style";
import {
  AccordionComponent,
  AccordionProps,
  AccordionType,
} from "./Accordion.type";

export type Props = {
  gap?: number;
  type?: AccordionType;
};

export const AccordionContext = createContext<Props>({ type: "small", gap: 4 });
AccordionContext.displayName = "AccordionContext";

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
