import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { colors, spacing, typography, shadows, radius } = theme;

  return {
    root: {
      position: "fixed",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(8px)",
    },
    dialog: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
      maxWidth: "480px",
      maxHeight: "720px",
      padding: 0,
      filter: `drop-shadow(${shadows.elevation5})`,
      border: 0,
      borderRadius: radius.radius20,
      overflow: "hidden",
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
      flex: 1,
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
