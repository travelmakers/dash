import { keyframes } from "@emotion/react";
import { createStyles } from "@travelmakers-design-v2/styles";
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

export default createStyles(
  (theme, { isProcessing }: Pick<SequenceType, "isProcessing">) => {
    const { spacing, colors } = theme;

    const first = () => {
      if (isProcessing) {
        return { ...pathAni(1), stroke: colors.primary3 };
      }

      return { stroke: colors.primary3 };
    };

    return {
      root: {
        marginLeft: isProcessing && spacing.spacing5,
      },
      first: first(),
      second: { ...pathAni(2), stroke: colors.primary70 },
      third: { ...pathAni(3), stroke: colors.primary80 },
    };
  }
);
