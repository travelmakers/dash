import { TmTheme, createStyles } from "@travelmakers-design-v2/styles";
import { SequenceType } from "../Process/Process.type";

export default createStyles(
  (theme: TmTheme, { isProcessing }: Pick<SequenceType, "isProcessing">) => {
    const { colors, typography } = theme;

    return {
      root: {
        display: "flex",
        alignItems: "center",
      },
      process: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        padding: "0 11px",
        color: isProcessing ? colors.white : colors.primary3,
        ...typography.body3,
        textAlign: "center",
        backgroundColor: isProcessing ? colors.secondary00 : colors.transparent,
        borderRadius: "22px",
      },
      processor: {
        fontWeight: 700,
      },
    };
  }
);
