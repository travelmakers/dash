import React, { createContext, useContext } from "react";
import createCache, { EmotionCache, Options } from "@emotion/cache";

import { useCoEmotionOptions } from "../theme/TmProvider";

export const { getCache } = (() => {
  let cache: EmotionCache;

  function _getCache(options?: Options) {
    if (cache === undefined) {
      cache = createCache(options || { key: "co", prepend: true });
    }

    return cache;
  }

  return { getCache: _getCache };
})();

const context = createContext<EmotionCache>(undefined);

export function useCache() {
  const options = useCoEmotionOptions();
  return useContext(context) || getCache(options);
}

interface CacheProviderProps {
  value: EmotionCache;
  children: React.ReactNode;
}

export function CacheProvider({ children, value }: CacheProviderProps) {
  return <context.Provider value={value}>{children}</context.Provider>;
}
