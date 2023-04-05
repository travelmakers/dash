import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, PropsWithChildren } from "react";
import { View } from "../../View";
import useStyles from "./Menu.style";
import { MenuComponent, MenuProps } from "./Menu.type";

export const Menu: MenuComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "ul">(
    { className, children, ...props }: PropsWithChildren<MenuProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"ul"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        {children}
      </View>
    );
  }
);

Menu.displayName = "Menu";
