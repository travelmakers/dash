import { deviceSizes } from "../types/TmSize";

export type TmMedia = {
  mobile: string;
  wide: string;
};

export const DEFAULT_MEDIA: TmMedia = {
  mobile: `@media (max-width: ${deviceSizes.mobile}px)`,
  wide: `@media (min-width: ${deviceSizes.mobile + 1}px)`,
};
