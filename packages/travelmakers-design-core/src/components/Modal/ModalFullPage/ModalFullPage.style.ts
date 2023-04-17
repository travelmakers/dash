import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { colors, spacing, typography } = theme;

  return {
    root: {
      width: "360px",
    },
    header: {
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "repeat(3, 1fr)",
      height: "48px",
      padding: `0 ${spacing.spacing30}`,
      backgroundColor: colors.white,
      borderBottom: `1px solid ${colors.outline}`,
    },
    title: {
      ...typography.subhead2,
      gridColumn: 2,
      color: colors.primary,
      textAlign: "center",
    },
    button: {
      padding: 0,
      ...typography.body3,
      color: colors.primary,
      gridColumn: 3,
      marginLeft: "auto",
      backgroundColor: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
    },
    body: {
      padding: `${spacing.spacing50} ${spacing.spacing30}`,
      backgroundColor: colors.surface,
      overflowY: "scroll",
    },
    bodyTitle: {
      ...typography.subhead2,
      display: "inline-block",
      marginBottom: spacing.spacing40,
      color: colors.primary1,
    },
    bodyText: {
      ...typography.body3,
      margin: 0,
      color: colors.primary1,
    },
  };
});
