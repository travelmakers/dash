import { createStyles } from "@travelmakers-design-v2/styles";
import { TM_HEIGHTS } from "src/constants";
import { Props } from "./ButtonIcon";

const sizes = {
  small: {
    height: TM_HEIGHTS.small,
    padding: "0 24px",
  },

  medium: {
    height: TM_HEIGHTS.medium,
    padding: "0 24px",
  },

  large: {
    height: TM_HEIGHTS.large,
    padding: "0 24px",
  },
};

export default createStyles((theme, { size, disabled, type }: Props) => {
  return {
    button: {
      ...sizes[size],
      borderRadius: theme.spacing.spacing100,
      backgroundColor: theme.colors.primary,
    },
  };
});
