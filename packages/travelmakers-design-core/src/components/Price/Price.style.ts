import { createStyles } from "@travelmakers-design-v2/styles";
import { Props } from "./Price";

export default createStyles((theme, { type }: Pick<Props, "type">) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },

    percentText: {
      ...theme.typography.display6,
      fontWeight: "700",
      color: theme.colors.error,
      width: "39px",
    },
    nightText: {
      ...theme.typography.body3,
      fontWeight: "700",
      color: theme.colors.primary1,
      textAlign: "right",
      width: "28px",
    },
    priceText: {
      ...theme.typography.display4,
      fontWeight: "700",
      color: theme.colors.primary1,
      marginLeft: "2px",
    },
    priceBeforeText: {
      ...theme.typography.body2,
      fontWeight: "700",
      color: theme.colors.primary1,
    },
    priceStartText: {
      ...theme.typography.body3,
      fontWeight: "400",
      color: theme.colors.primary2,
      marginLeft: "4px",
    },

    // NOTE: Type is 'secondary'
    labelSecondary: {
      ...theme.typography.body3,
      fontWeight: "400",
      color: theme.colors.primary1,
      marginRight: "4px",
    },
    nightSecondaryText: {
      ...theme.typography.body3,
      fontWeight: "700",
      color: theme.colors.primary1,
      textAlign: "right",
      marginRight: "4px",
    },
    priceSecondaryText: {
      ...theme.typography.body3,
      fontWeight: "400",
      textDecorationLine: "line-through",
      color: theme.colors.primary2,
    },
    priceBeforeSecondaryText: {
      ...theme.typography.body3,
      fontWeight: "400",
      textDecorationLine: "line-through",
      color: theme.colors.primary2,
    },
    couponWrap: {
      display: "flex",
      alignItems: "center",
      width: "74px",
      background: theme.colors.secondaryContainer,
      borderRadius: "4px",
      marginLeft: "4px",
    },
    couponWord: {
      display: "block",
      width: "fit-content",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "10px",
      lineHeight: "16px",
      color: theme.colors.secondary1,
    },
  };
});
