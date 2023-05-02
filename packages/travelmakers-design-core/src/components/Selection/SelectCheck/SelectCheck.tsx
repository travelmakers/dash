import {
  CSSObject,
  CoTypography,
  PolymorphicRef,
} from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { useId } from "../../../../../travelmakers-design-hooks/src";
import { Icon } from "../../Icon";
import { View } from "../../View";
import useStyles from "./SelectCheck.style";
import {
  SelectCheckComponent,
  SelectCheckProps,
  SelectCheckType,
} from "./SelectCheck.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  type?: SelectCheckType;
  label: string;
  gap?: number | "full";
  typography?: keyof CoTypography;
  fontWeight?: CSSObject["fontWeight"];
  isVisibleLabel?: boolean;
  isReverse?: boolean;
  hasParent?: boolean;
  name?: string;
}

export const SelectCheck: SelectCheckComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "input">(
    {
      type = "small",
      label,
      gap = 8,
      typography,
      fontWeight = 700,
      isVisibleLabel = false,
      isReverse = false,
      hasParent = false,
      name = "select-check-box-icon",
      className,
      ...props
    }: SelectCheckProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const id = useId(name);
    const { classes, cx } = useStyles({
      type,
      gap,
      typography,
      fontWeight,
      isReverse,
    });

    return (
      <label
        htmlFor={id}
        className={cx(classes.root, className)}
        onClick={(e) => hasParent && e.stopPropagation()}
      >
        <View<React.ElementType>
          id={id}
          type={"checkbox"}
          component={"input"}
          ref={ref}
          className={cx(classes.input, "sr-only")}
          name={name}
          {...props}
        />
        <div className="tm-select-check__icon">
          <Icon src={"IcCheck"} color="white" />
        </div>
        <div className={isVisibleLabel ? classes.label : "sr-only"}>
          {label}
        </div>
      </label>
    );
  }
);

SelectCheck.displayName = "SelectCheck";
