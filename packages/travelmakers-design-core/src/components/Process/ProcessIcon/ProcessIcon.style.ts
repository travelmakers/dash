import { keyframes } from "@emotion/react";
import { TmTheme, createStyles } from "@travelmakers/styles";
import { SequenceType } from "../Process/Process.type";

const twinkle = keyframes`
from {
  opacity: 1;
}
70% {
  opacity: 0;
}`;

const pathAni = (index: number) => {
  const defaultDuration = 1.5;

  return {
    opacity: 0,
    animation: `${twinkle} ${defaultDuration}s infinite`,
    animationDelay: `${defaultDuration / (3 / index)}s`,
  };
};

const firstProcessing = (
  theme: TmTheme,
  isProcessing: Pick<SequenceType, "isProcessing">["isProcessing"]
) => {
  const { colors } = theme;

  if (isProcessing) {
    return { ...pathAni(1), stroke: colors.primary3 };
  }

  return { stroke: colors.primary3 };
};

type StyleProp = {
  isProcessing: Pick<SequenceType, "isProcessing">["isProcessing"];
};

export default createStyles((theme: TmTheme, { isProcessing }: StyleProp) => {
  const { spacing, colors } = theme;

  return {
    root: {
      marginLeft: isProcessing && spacing.spacing5,
      flexShrink: 0,
    },
    first: firstProcessing(theme, isProcessing),
    second: { ...pathAni(2), stroke: colors.primary70 },
    third: { ...pathAni(3), stroke: colors.primary80 },
  };
});
