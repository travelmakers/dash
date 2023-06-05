import { createStyles } from "@travelmakers/styles";
import { Props } from "./Price";

export default createStyles((theme, { type }: Pick<Props, "type">) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.spacing5,
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
    },

    // NOTE: Type is 'secondary'
    labelSecondary: {
      ...theme.typography.body3,
      fontWeight: "400",
      color: theme.colors.primary1,
    },
    nightSecondaryText: {
      ...theme.typography.body3,
      fontWeight: "700",
      color: theme.colors.primary1,
      textAlign: "right",
    },
    priceSecondaryText: {
      ...theme.typography.body3,
      fontWeight: "400",
      color: theme.colors.primary2,
    },
    priceSecondaryLineThrough: {
      textDecoration: "line-through",
    },
    couponWrap: {
      display: "flex",
      alignItems: "center",
      width: "74px",
      background: theme.colors.secondaryContainer,
      borderRadius: theme.spacing.spacing5,
    },
    couponWord: {
      ...theme.typography.caption,
      fontWeight: "700",
      color: theme.colors.secondary1,
    },
  };
});
