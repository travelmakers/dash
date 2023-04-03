import { Global, css } from "@emotion/react";

const styles = css`
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%",
  },

  body: {
    padding: 300px,
  },

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export const NormalizeCSS = () => {
  return <Global styles={styles} />;
};
