import { deviceSizes } from "../types/TmSize";

export type TmMedia = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export const DEFAULT_MEDIA: TmMedia = {
  mobile: `@media (max-width: ${deviceSizes.mobile})`,
  tablet: `@media (min-width: calc(${deviceSizes.mobile} + 1px))`,
  desktop: `@media (min-width: calc(${deviceSizes.maxSize}))`,
};
