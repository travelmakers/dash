import { createStyles, TmTheme } from "@travelmakers/styles";
import { SequenceType } from "../Process/Process.type";

type StyleProp = {
  isProcessing: Pick<SequenceType, "isProcessing">["isProcessing"];
};

export default createStyles((theme: TmTheme, { isProcessing }: StyleProp) => {
  const { colors, typography, spacing } = theme;

  return {
    root: {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
    },
    process: {
      ...typography.body3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minWidth: "67px",
      width: "100%",
      height: "100%",
      padding: `0 ${spacing.spacing5}`,
      color: isProcessing ? colors.white : colors.primary3,
      textAlign: "center",
      backgroundColor: isProcessing ? colors.secondary00 : colors.transparent,
      borderRadius: "22px",

      ["&.process-line-height"]: {
        lineHeight: "14px",
      },
    },
    processEn: {
      ...typography.body3,
      lineHeight: "normal",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      padding: `${spacing.spacing5} ${spacing.spacing10}`,
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
});
