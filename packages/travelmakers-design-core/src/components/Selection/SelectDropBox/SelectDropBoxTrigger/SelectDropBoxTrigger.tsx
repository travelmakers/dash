import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, useContext, useState } from "react";
import { Dropdown } from "../../../Dropdown";
import { Icon } from "../../../Icon";
import { View } from "../../../View";
import { SelectDropBoxContext } from "../SelectDropBox/SelectDropBox";
import useStyles from "./SelectDropBoxTrigger.style";
import {
  ReturnType,
  SelectDropBoxTriggerProps,
} from "./SelectDropBoxTrigger.type";

export const SelectDropBoxTrigger = forwardRef(
  <C extends React.ElementType = typeof Dropdown.Trigger>(
    { className, ...props }: SelectDropBoxTriggerProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { type, currentValue, disabled, placeholder, direction } =
      useContext(SelectDropBoxContext);
    const [showOptions, setShowOptions] = useState(false);
    const showPlaceholder = currentValue === "";
    const { classes, cx } = useStyles({
      type,
      showOptions,
      showPlaceholder,
      direction,
      disabled,
    });

    return (
      <View<React.ElementType>
        component={Dropdown.Trigger}
        ref={ref}
        className={cx(classes.root, className)}
        disabled={disabled}
        {...props}
      >
        {({ isToggle }) => {
          setShowOptions(isToggle);

          return (
            <>
              <span className={classes.content}>
                {currentValue || placeholder}
              </span>
              {!disabled && (
                <Icon
                  className={classes.icon}
                  src={"IcAngleDown"}
                  width={16}
                  height={16}
                />
              )}
            </>
          );
        }}
      </View>
    );
  }
) as unknown as ReturnType;

SelectDropBoxTrigger.displayName = "SelectDropBoxTrigger";
