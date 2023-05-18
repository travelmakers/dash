import { Global, css } from "@emotion/react";

const styles = css`
  @font-face {
    font-family: "Noto Serif KR";
    font-style: normal;
    font-weight: 400;
    src: local("Noto Serif CJK KR"), local("Source Han Serif K"),
      local("Source Han Serif"), local("Noto Serif CJK"), local("Noto Serif"),
      url(https://cdn.rawgit.com/kattergil/NotoSerifKR-Katter/7392ea08/fonts/NotoSerifCJKkr-Bold-subset.woff)
        format("woff"),
      url(https://cdn.rawgit.com/kattergil/NotoSerifKR-Katter/7392ea08/fonts/NotoSerifCJKkr-Bold-subset.woff2)
        format("woff2"),
      url(https://cdn.rawgit.com/kattergil/NotoSerifKR-Katter/7392ea08/fonts/NotoSerifCJKkr-Bold-subset.otf)
        format("otf");
  }

  @font-face {
    font-family: "Noto Serif KR";
    font-style: normal;
    font-weight: 700;
    src: local("Noto Serif CJK KR"), local("Source Han Serif K"),
      local("Source Han Serif"), local("Noto Serif CJK"), local("Noto Serif"),
      url(https://cdn.rawgit.com/kattergil/NotoSerifKR-Katter/7392ea08/fonts/NotoSerifCJKkr-Bold-subset.woff)
        format("woff"),
      url(https://cdn.rawgit.com/kattergil/NotoSerifKR-Katter/7392ea08/fonts/NotoSerifCJKkr-Bold-subset.woff2)
        format("woff2"),
      url(https://cdn.rawgit.com/kattergil/NotoSerifKR-Katter/7392ea08/fonts/NotoSerifCJKkr-Bold-subset.otf)
        format("otf");
  }

  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 700;
    font-style: normal;
  }

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
    width: 100%;
    position: fixed;
  }
`;

export const NormalizeCSS = () => {
  return <Global styles={styles} />;
};
