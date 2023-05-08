import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import { TertiaryTabItem } from "../TertiaryTabItem";
import useStyles from "./TertiaryTab.style";
import { TertiaryTabComponent, TertiaryTabProps } from "./TertiaryTab.type";

export interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  items: React.ReactNode[];
}

export const TertiaryTab: TertiaryTabComponent & {
  displayName?: string;
  Item?: typeof TertiaryTabItem;
} = forwardRef(
  <C extends React.ElementType = "fieldset">(
    { legend, items, className, ...props }: TertiaryTabProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"fieldset"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <legend className="sr-only">{legend}</legend>
        {items}
      </View>
    );
  }
);

TertiaryTab.displayName = "TertiaryTab";
TertiaryTab.Item = TertiaryTabItem;
