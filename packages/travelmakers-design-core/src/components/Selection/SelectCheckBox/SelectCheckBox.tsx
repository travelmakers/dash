import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { Icon } from "../../Icon";
import { View } from "../../View";
import { SelectCheck } from "../SelectCheck/SelectCheck";
import useStyles from "./SelectCheckBox.style";
import {
  SelectCheckBoxComponent,
  SelectCheckBoxProps,
  SelectCheckBoxType,
} from "./SelectCheckBox.type";

export interface Props {
  label: string;
  type?: SelectCheckBoxType;
  hasAction?: boolean;
  hasBackgroundColor?: boolean;
}

const ACTION_ICON_SIZE: Record<
  SelectCheckBoxType,
  { width: number; height: number }
> = {
  h40: { width: 16, height: 16 },
  h48: { width: 24, height: 24 },
};

export const SelectCheckBox: SelectCheckBoxComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      label,
      type = "h40",
      hasAction = false,
      hasBackgroundColor = true,
      className,
      ...props
    }: SelectCheckBoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type, hasBackgroundColor });

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(
          classes.root,
          { [classes.padding]: hasAction },
          className
        )}
        {...props}
      >
        <SelectCheck
          className={!hasAction && classes.padding}
          label={label}
          typography={"body3"}
          gap={!hasAction ? "full" : 12}
          isReverse={!hasAction}
          fontWeight={700}
          isVisibleLabel
          hasParent
        />
        {hasAction && <Icon src={"IcAngleRight"} {...ACTION_ICON_SIZE[type]} />}
      </View>
    );
  }
);

SelectCheckBox.displayName = "SelectCheckBox";
