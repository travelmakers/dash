import { createStyles } from "@travelmakers/styles";
import { Props } from "./ModalFullPage";

export default createStyles(
  (
    theme,
    { hasIframe, hasAutoWidth }: Pick<Props, "hasIframe" | "hasAutoWidth">
  ) => {
    const { colors, spacing, typography, radius, media } = theme;

    return {
      modal: {
        width: "100%",
        height: "100%",
        maxWidth: "480px",

        [`${media.tablet}`]: {
          maxHeight: "720px",
          width: hasAutoWidth ? "auto" : "100%",
          borderRadius: radius.radius20,
        },
      },
      header: {
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "1fr 4fr 1fr",
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
        padding: !hasIframe
          ? `${spacing.spacing50} ${spacing.spacing30}`
          : `${spacing.spacing10} 0`,
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
  }
);
