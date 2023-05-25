import createEmotionServer from "@emotion/server/create-instance";
import { getCache } from "@travelmakers/styles";

export function createStylesServer() {
  return createEmotionServer(getCache());
}
