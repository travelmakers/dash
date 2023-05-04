import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { createContext, forwardRef, useState } from "react";
import { Dropdown } from "../../../Dropdown";
import { View } from "../../../View";
import { SelectDropBoxItem } from "../SelectDropBoxItem";
import { SelectDropBoxItems } from "../SelectDropBoxItems";
import { SelectDropBoxTrigger } from "../SelectDropBoxTrigger";
import useStyles from "./SelectDropBox.style";
import {
  SelectDropBoxComponent,
  SelectDropBoxContextType,
  SelectDropBoxProps,
} from "./SelectDropBox.type";

export interface Props {
  type?: "option" | "filter";
  label: string;
  initValue?: string;
  placeholder?: string;
  isVisibleLabel?: boolean;
  disabled?: boolean;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export const SelectDropBoxContext =
  createContext<SelectDropBoxContextType | undefined>(undefined);
SelectDropBoxContext.displayName = "SelectDropBoxContext";

export const SelectDropBox: SelectDropBoxComponent & {
  displayName?: string;
  Trigger?: typeof SelectDropBoxTrigger;
  Items?: typeof SelectDropBoxItems;
  Item?: typeof SelectDropBoxItem;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type = "option",
      label,
      initValue = "",
      placeholder = "옵션을 선택해주세요.",
      isVisibleLabel = true,
      disabled = false,
      trigger,
      content,
      className,
      ...props
    }: SelectDropBoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const [currentValue, setCurrentValue] = useState(initValue);
    const { classes, cx } = useStyles({
      type,
      disabled,
    });

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <strong className={isVisibleLabel ? classes.label : "sr-only"}>
          {label}
        </strong>
        <SelectDropBoxContext.Provider
          value={{ type, disabled, currentValue, setCurrentValue, placeholder }}
        >
          <Dropdown
            className={classes.dropdown}
            trigger={trigger}
            content={content}
          />
        </SelectDropBoxContext.Provider>
      </View>
    );
  }
);

SelectDropBox.displayName = "SelectDropBox";
SelectDropBox.Trigger = SelectDropBoxTrigger;
SelectDropBox.Items = SelectDropBoxItems;
SelectDropBox.Item = SelectDropBoxItem;
