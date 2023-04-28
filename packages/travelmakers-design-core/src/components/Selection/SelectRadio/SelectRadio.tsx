import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import { SelectRadioItem } from "../SelectRadioItem";
import useStyles from "./SelectRadio.style";
import { SelectRadioComponent, SelectRadioProps } from "./SelectRadio.type";

export interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  items: React.ReactNode[];
}

export const SelectRadio: SelectRadioComponent & {
  displayName?: string;
  Item?: typeof SelectRadioItem;
} = forwardRef(
  <C extends React.ElementType = "fieldset">(
    { className, items, ...props }: SelectRadioProps<C>,
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
        {items}
      </View>
    );
  }
);

SelectRadio.displayName = "SelectRadio";
SelectRadio.Item = SelectRadioItem;
