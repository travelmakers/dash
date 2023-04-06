import { PolymorphicRef, TmColor } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./HeaderSection.style";
import {
  HeaderSectionComponent,
  HeaderSectionProps,
  HeaderSectionType,
} from "./HeaderSection.type";

export interface Props {
  type: HeaderSectionType;
  title: string;
}

export const HEADER_SECTION_COLOR: Record<HeaderSectionType, TmColor> = {
  navy: "primary",
  white: "white",
};

export const HeaderSection: HeaderSectionComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "header">(
    { type, title, className, ...props }: HeaderSectionProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type });

    return (
      <View<React.ElementType>
        component={"header"}
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <Typography
          className={classes.title}
          component="strong"
          family="Noto Serif KR"
          level={"display4"}
          color={HEADER_SECTION_COLOR[type]}
          textAlign="center"
          strong
        >
          {title}
        </Typography>
      </View>
    );
  }
);

HeaderSection.displayName = "HeaderSection";
