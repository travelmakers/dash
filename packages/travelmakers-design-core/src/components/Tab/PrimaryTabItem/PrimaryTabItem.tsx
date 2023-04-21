import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, useState } from "react";
import { Divider } from "../../Divider";
import { View } from "../../View";
import useStyles from "./PrimaryTabItem.style";
import {
  PrimaryTabItemComponent,
  PrimaryTabItemProps,
} from "./PrimaryTabItem.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
}

let defaultId = 0;

export const PrimaryTabItem: PrimaryTabItemComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "input">(
    { label, className, ...props }: PrimaryTabItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();
    const [id] = useState(() => String(defaultId++));
    const elementId = `tm-tab-${id}`;

    const onChangeHandler = (e) => {
      console.log(e.target.value);
    };

    return (
      <li className={classes.item}>
        <label htmlFor={elementId} className={classes.label}>
          <View<React.ElementType>
            component={"input"}
            id={elementId}
            ref={ref}
            type="radio"
            name="primary"
            className={cx(classes.input, "sr-only")}
            onChange={onChangeHandler}
            {...props}
          />
          <div className={classes.content}>{label}</div>
        </label>
        <Divider className={"tm-tab__divider"} type="vertical" height="20px" />
      </li>
    );
  }
);

PrimaryTabItem.displayName = "PrimaryTabItem";
