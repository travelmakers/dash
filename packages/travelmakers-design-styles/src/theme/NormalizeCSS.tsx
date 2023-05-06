import { Global, css } from "@emotion/react";

const styles = css`
  html: {
    fontfamily: "sans-serif";
    line-height: "1.15";
    text-size-adjust: "100%";
  }

  body: {
    margin: 0;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .tm-block-scrolling {
    overflow: hidden;
  }
`;

export const NormalizeCSS = () => {
  return <Global styles={styles} />;
};
