import { PolymorphicRef, TmColor } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../View";
import useStyles from "./Divider.style";
import { DividerComponent, DividerProps, DividerType } from "./Divider.type";

export interface Props {
  type: DividerType;
  width?: string;
  height?: string;
  color?: TmColor;
}

export const Divider: DividerComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type,
      width,
      height,
      color = "primary3",
      className,
      ...props
    }: DividerProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type, width, height, color });

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
