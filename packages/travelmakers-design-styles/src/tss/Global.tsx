import { css, CSSObject, Global as EmotionGlobal } from "@emotion/react";

import { useTmTheme } from "../theme/TmProvider";
import type { TmTheme } from "../theme/types";

interface GlobalStylesProps {
  styles(theme: TmTheme): CSSObject;
}

export const Global = ({ styles }: GlobalStylesProps) => {
  const theme = useTmTheme();
  return <EmotionGlobal styles={css(styles(theme))} />;
};
