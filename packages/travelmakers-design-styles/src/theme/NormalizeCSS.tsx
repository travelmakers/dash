import { Global, css } from "@emotion/react";

const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&display=swap");
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css");
  @import url("https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css");

  html: {
    fontfamily: "sans-serif";
    line-height: "1.15";
    text-size-adjust: "100%";
  }

  body {
    margin: 0;
    font-family: Pretendard, Noto Serif KR, serif, sans-serif !important;
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
    width: 100%;
    position: fixed;
  }
`;

export const NormalizeCSS = () => {
  return <Global styles={styles} />;
};
