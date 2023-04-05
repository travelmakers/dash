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
      width: "39px",
      color: theme.colors.error,
    },
    nightText: {
      ...theme.typography.body3,
      fontWeight: "700",
      textAlign: "right",
      width: "28px",
      color: theme.colors.primary1,
    },
    priceText: {
      ...theme.typography.display4,
      fontWeight: "700",
      color: theme.colors.primary1,
      marginLeft: theme.spacing.spacing5,
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
      marginLeft: theme.spacing.spacing5,
    },

    // NOTE: Type is 'secondary'
    labelSecondary: {
      ...theme.typography.body3,
      fontWeight: "400",
      color: theme.colors.primary1,
      marginRight: theme.spacing.spacing5,
    },
    nightSecondaryText: {
      ...theme.typography.body3,
      fontWeight: "700",
      color: theme.colors.primary1,
      textAlign: "right",
      marginRight: theme.spacing.spacing5,
    },
    priceSecondaryText: {
      ...theme.typography.body3,
      fontWeight: "400",
      color: theme.colors.primary2,
    },
    priceBeforeSecondaryText: {
      ...theme.typography.body3,
      fontWeight: "400",
      color: theme.colors.primary2,
    },
    couponWrap: {
      display: "flex",
      alignItems: "center",
      width: "74px",
      background: theme.colors.secondaryContainer,
      borderRadius: theme.spacing.spacing5,
      marginLeft: theme.spacing.spacing5,
    },
    couponWord: {
      ...theme.typography.caption,
      fontWeight: "700",
      color: theme.colors.secondary1,
    },
  };
});
