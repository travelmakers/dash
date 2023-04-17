import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../../View";
import useStyles from "./ModalFullPageFooter.style";
import {
  ModalFullPageFooterProps,
  ModalFullPageFooterComponent,
} from "./ModalFullPageFooter.type";

export interface Props {
  label: string;
}

export const ModalFullPageFooter: ModalFullPageFooterComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "button">(
    { label, className, ...props }: ModalFullPageFooterProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <div className={classes.root}>
        <View<React.ElementType>
          component={"button"}
          ref={ref}
          className={cx(classes.button, className)}
          {...props}
        >
          {label}
        </View>
      </div>
    );
  }
);

ModalFullPageFooter.displayName = "ModalFullPageFooter";
