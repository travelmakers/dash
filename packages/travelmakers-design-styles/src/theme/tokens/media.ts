import { deviceSizes } from "../types/TmSize";

export type TmMedia = {
  mobile: string;
  wide: string;
};

export const DEFAULT_MEDIA: TmMedia = {
  mobile: `@media (max-width: ${deviceSizes.mobile})`,
  wide: `@media (min-width: calc(${deviceSizes.mobile} + 1px))`,
};
