import { createStyles } from "@travelmakers/styles";
import { Props } from "./Price";

export default createStyles((theme, { type }: Pick<Props, "type">) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
      width: "100%",
    },

    percentText: {
      ...theme.typography.display6,
      fontWeight: "700",
      width: "39px",
      color: theme.colors.error,
    },
    percentSmallText: {
      ...theme.typography.body3,
      fontWeight: "700",
      color: theme.colors.error,
    },
    priceText: {
      ...theme.typography.display4,
      fontWeight: "700",
      color: theme.colors.primary1,
    },
    priceSmallText: {
      ...theme.typography.body3,
      fontWeight: "700",
      color: theme.colors.primary1,
    },
    priceTextBox: {
      display: "flex",
      alignItems: "center",
    },
    priceBeforeText: {
      ...theme.typography.body2,
      fontWeight: "700",
      color: theme.colors.primary1,
    },
    priceBeforeTextSmall: {
      ...theme.typography.body3,
      fontWeight: "700",
      color: theme.colors.primary1,
    },
    priceStartText: {
      ...theme.typography.body3,
      fontWeight: "400",
      color: theme.colors.primary2,
    },
    priceStartTextSmall: {
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
    labelSecondarySmall: {
      ...theme.typography.caption,
      fontWeight: "400",
      color: theme.colors.primary3,
    },
    priceSecondaryText: {
      ...theme.typography.body3,
      fontWeight: "400",
      color: theme.colors.primary2,
    },
    priceSecondaryTextSmall: {
      ...theme.typography.caption,
      fontWeight: "400",
      color: theme.colors.primary3,
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
