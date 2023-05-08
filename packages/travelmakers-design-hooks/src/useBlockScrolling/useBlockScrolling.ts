import { useEffect } from "react";

export const useBlockScrolling = (deps: boolean) => {
  useEffect(() => {
    if (deps) {
      document.body.classList.add("tm-block-scrolling");
    } else {
      document.body.classList.remove("tm-block-scrolling");
    }

    return () => document.body.classList.remove("tm-block-scrolling");
  }, [deps]);
};
