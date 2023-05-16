import { PolymorphicRef, TmColor } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./HeaderSection.style";
import {
  HeaderSectionProps,
  HeaderSectionType,
  ReturnType,
} from "./HeaderSection.type";

export interface Props {
  type: HeaderSectionType;
  title: string;
}

export const HEADER_SECTION_COLOR: Record<HeaderSectionType, TmColor> = {
  navy: "primary",
  white: "white",
};

export const HeaderSection = forwardRef(
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
) as unknown as ReturnType;

HeaderSection.displayName = "HeaderSection";
