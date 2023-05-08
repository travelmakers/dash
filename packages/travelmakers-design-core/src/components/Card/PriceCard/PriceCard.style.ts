import { createStyles } from "@travelmakers/styles";
import { Props } from "./PriceCard";

export default createStyles((theme, { status }: Pick<Props, "status">) => {
  return {
    container: {
      width: "120px",
      display: "inline-block",
      border: `1px solid ${theme.colors.outline}`,
      borderRadius: theme.spacing.spacing5,
      padding: `${theme.spacing.spacing10} ${theme.spacing.spacing20}`,
    },
  };
});
