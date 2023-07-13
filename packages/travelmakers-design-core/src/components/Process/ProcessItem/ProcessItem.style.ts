import { TmTheme, createStyles } from "@travelmakers/styles";
import { SequenceType } from "../Process/Process.type";
import { Props } from "./ProcessItem";

type StyleProp = {
  isProcessing: Pick<SequenceType, "isProcessing">["isProcessing"];
  hasIcon: Props["hasIcon"];
  isBank: Props["isBank"];
};

export default createStyles(
  (theme: TmTheme, { isProcessing, hasIcon, isBank }: StyleProp) => {
    const { colors, typography } = theme;

    return {
      root: {
        display: "flex",
        alignItems: "center",
        flex: hasIcon ? 1 : undefined,
      },
      process: {
        ...typography.body3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: isBank ? "100%" : "94.67px",
        height: "100%",
        padding: "0 11px",
        color: isProcessing ? colors.white : colors.primary3,
        textAlign: "center",
        backgroundColor: isProcessing ? colors.secondary00 : colors.transparent,
        borderRadius: "22px",

        ["&.process-line-height"]: {
          lineHeight: "14px",
        },
      },
      processor: {
        fontWeight: 700,
      },
      iconBox: {
        width: "16px",
        height: "16px",
      },
    };
  }
);
