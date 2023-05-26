import { createStyles } from "@travelmakers/styles";
import { Props } from "./CouponCard";

export default createStyles((theme, { type }: Pick<Props, "type">) => {
  const getBackgroundColor = () => {
    return {
      week: {
        backgroundColor: theme.colors.secondary,
      },
      month: {
        backgroundColor: theme.colors.secondary20,
      },
      all: {
        backgroundColor: theme.colors.primary,
      },
    };
  };

  return {
    container: {
      maxWidth: "348px",
      width: "100%",
      height: "142px",
      backgroundColor: theme.colors.primary99,
      borderRadius: theme.radius.radius20,
      overflow: "hidden",
      display: "flex",
    },
    leftBox: {
      ...getBackgroundColor()[type],
      width: "80px",
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing.spacing10,
    },
    rightBox: {
      width: "100%",
      padding: theme.spacing.spacing20,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.spacing5,
    },
    discountBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    checkBox: {
      backgroundColor: theme.colors.primaryContainer,
      borderRadius: theme.radius.radius100,
      width: 16,
      height: 16,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});
