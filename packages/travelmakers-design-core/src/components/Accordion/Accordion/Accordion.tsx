import { PolymorphicRef } from "@travelmakers/styles";
import React, { createContext, forwardRef } from "react";
import { View } from "../../View";
import { AccordionItem } from "../AccordionItem";
import useStyles from "./Accordion.style";
import { AccordionProps, AccordionType, ReturnType } from "./Accordion.type";

export type Props = {
  gap?: number;
  type?: AccordionType;
  items: React.ReactNode[];
};

export const AccordionContext = createContext<Omit<Props, "items">>({
  type: "small",
  gap: 4,
});
AccordionContext.displayName = "AccordionContext";

export const Accordion = forwardRef(
  <C extends React.ElementType = "dl">(
    { gap = 4, type = "small", items, className, ...props }: AccordionProps<C>,
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
          {items}
        </View>
      </AccordionContext.Provider>
    );
  }
) as unknown as ReturnType;

Accordion.Item = AccordionItem;
Accordion.displayName = "Accordion";
