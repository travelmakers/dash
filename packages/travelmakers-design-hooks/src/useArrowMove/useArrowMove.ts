import { useCallback, useState } from "react";

/**
 * ex)  price?.map((item, index) => (<div ref={(el) => (contentRef.current[index] = el)} />))
 * @param contentRef
 * @param maxPage
 * @returns
 */
export const useArrowMove = (
  contentRef: React.MutableRefObject<HTMLElement[]>,
  maxPage: number
) => {
  const INIT_PAGE = 0;
  const MAX_COUNT = maxPage - 1;
  const [page, setPage] = useState<number>(INIT_PAGE);
  const [leftArrowHover, setLeftArrowHover] = useState(false);
  const [rightArrowHover, setRightArrowHover] = useState(false);

  function arrowLeftClickHandler() {
    const pageMove = calculatePageMove(true);
    const newPage = page - pageMove;

    if (pageMove !== 0) {
      arrowHover(true, newPage);
      setPage(newPage);
      moveScroll(newPage);
    }
  }
  function arrowRightClickHandler() {
    const pageMove = calculatePageMove(false);
    const newPage = page + pageMove;

    if (pageMove !== 0) {
      arrowHover(false, newPage);
      setPage(newPage);
      moveScroll(newPage);
    }
  }

  function arrowHover(isLeftArrow: boolean, newPage: number) {
    if (isLeftArrow) {
      setLeftArrowHover(newPage > INIT_PAGE);
      setRightArrowHover(true);
    } else {
      setLeftArrowHover(true);
      setRightArrowHover(newPage < MAX_COUNT);
    }
  }

  function calculatePageMove(isLeftArrow: boolean) {
    const defaultPageMove = 2;

    if (isLeftArrow) {
      if (page <= INIT_PAGE) return 0;

      const currentContent = contentRef.current?.[page - 1];
      return !currentContent || page - 1 === 0 ? 1 : defaultPageMove;
    } else {
      if (page >= MAX_COUNT) return 0;

      const currentContent = contentRef.current?.[page + defaultPageMove];
      return !currentContent ? 1 : page === 0 ? 3 : defaultPageMove;
    }
  }

  function moveScroll(newPage: number) {
    contentRef.current?.[newPage].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return {
    /**
     * NOTE: 현재페이지
     */
    page,
    /**
     * NOTE: 왼쪽으로 move
     */
    arrowLeftClickHandler,
    /**
     * NOTE: 오른쪽으로 move
     */
    arrowRightClickHandler,
    /**
     * leftArrow true/false 지정(해당 유무에 따라서 css에서 visible 처리)
     */
    setLeftArrowHover,
    /**
     * rightArrow true/false 지정(해당 유무에 따라서 css에서 visible 처리)
     */
    setRightArrowHover,
    /**
     * leftArrow true/false 여부
     */
    leftArrowHover,
    /**
     * rightArrow true/false 여부
     */
    rightArrowHover,
  };
};
