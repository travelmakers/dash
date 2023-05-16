import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Button, ButtonProps } from "../../Button";
import { View } from "../../View";
import useStyles from "./ModalFullPageFooter.style";
import {
  ModalFullPageFooterProps,
  ReturnType,
} from "./ModalFullPageFooter.type";

export interface Props
  extends Omit<ButtonProps<typeof Button>, "overrideStyles"> {
  label: string;
}

export const ModalFullPageFooter = forwardRef(
  <C extends React.ElementType = typeof Button>(
    { label, className, ...props }: ModalFullPageFooterProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <div className={classes.root}>
        <View<React.ElementType>
          component={Button}
          ref={ref}
          className={cx(classes.button, className)}
          size={"medium"}
          {...props}
        >
          {label}
        </View>
      </div>
    );
  }
) as unknown as ReturnType;

ModalFullPageFooter.displayName = "ModalFullPageFooter";
