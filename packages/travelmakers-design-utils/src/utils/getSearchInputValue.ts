export const regExp = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9- ]/g;

/**
 * @param {string} input anything string
 *
 * @example 시그니엘 호텔
 * @returns {string} 시그니엘 호텔
 *
 * @example !@#시그니엘 호텔%
 * @returns {string} 시그니엘 호텔
 */
export const sanitizeInput = (str: string) => {
  return str.replace(regExp, "");
};

export const isFilteredReg = (str: string) => {
  return regExp.test(str);
};
