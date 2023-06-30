import { useUpdateEffect } from "@travelmakers/hooks";
import { PolymorphicRef } from "@travelmakers/styles";
import React, { createContext, forwardRef, useState } from "react";
import { Dropdown } from "../../../Dropdown";
import { View } from "../../../View";
import { SelectDropBoxItem } from "../SelectDropBoxItem";
import { SelectDropBoxItems } from "../SelectDropBoxItems";
import { SelectDropBoxTrigger } from "../SelectDropBoxTrigger";
import useStyles from "./SelectDropBox.style";
import {
  ReturnType,
  SelectDropBoxContextType,
  SelectDropBoxProps,
} from "./SelectDropBox.type";

export interface Props {
  type?: "option" | "filter";
  label: React.ReactNode;
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

export const SelectDropBox = forwardRef(
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

    useUpdateEffect(() => {
      setCurrentValue(initValue);
    }, [initValue]);

    const { classes, cx } = useStyles({
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
) as unknown as ReturnType;

SelectDropBox.displayName = "SelectDropBox";
SelectDropBox.Trigger = SelectDropBoxTrigger;
SelectDropBox.Items = SelectDropBoxItems;
SelectDropBox.Item = SelectDropBoxItem;
