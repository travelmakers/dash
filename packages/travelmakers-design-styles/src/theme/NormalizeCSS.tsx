import React from "react";
import { Global } from "@emotion/react";

const styles = {
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%",
  },

  body: {
    margin: 0,
  },
} as const;

export const NormalizeCSS = () => {
  return <Global styles={styles} />;
};
