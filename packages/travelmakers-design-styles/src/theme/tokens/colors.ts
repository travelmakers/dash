export type TmColor = string & {};

export const DEFAULT_COLORS = {
  transparent: "transparent",
  // NOTE: 신규 Color
  // Black & White
  black: "#000000",
  white: "#FFFFFF",

  // Reference Color
  neutral00: "#191919",
  neutral10: "#303030",
  neutral20: "#474747",
  neutral30: "#5E5E5E",
  neutral40: "#757575",
  neutral50: "#8C8C8C",
  neutral60: "#A3A3A3",
  neutral70: "#BABABA",
  neutral80: "#D1D1D1",
  neutral90: "#E8E8E8",
  neutral95: "#F3F3F3",
  neutral99: "#FDFDFD",

  primary00: "#30373F",
  primary10: "#454B52",
  primary20: "#595F65",
  primary30: "#6E7379",
  primary40: "#83878C",
  primary50: "#979B9F",
  primary60: "#ACAFB2",
  primary70: "#C1C3C5",
  primary80: "#D6D7D9",
  primary90: "#EAEBEC",
  primary95: "#F5F5F5",
  primary99: "#FDFDFD",

  secondary00: "#03936E",
  secondary10: "#1C9E7C",
  secondary20: "#35A98B",
  secondary30: "#4FB399",
  secondary40: "#68BEA8",
  secondary50: "#81C9B7",
  secondary60: "#9AD4C5",
  secondary70: "#B3DFD3",
  secondary80: "#CDE9E2",
  secondary90: "#E6F4F1",
  secondary95: "#FCFEFE",
  secondary99: "#D6D7D9",

  tertiary00: "#367CE1",
  tertiary10: "#454B52",
  tertiary20: "#595F65",
  tertiary30: "#6E7378",
  tertiary40: "#979B9F",
  tertiary50: "#ACAFB2",
  tertiary60: "#C1C3C5",
  tertiary70: "#D6D7D9",
  tertiary80: "#D7E5F9",
  tertiary90: "#EBF2FC",
  tertiary95: "#F5F8FD",
  tertiary99: "#FDFEFF",

  error00: "#DA5542",
  error10: "#DE6655",
  error20: "#E17768",
  error30: "#E5887B",
  error40: "#E9998E",
  error50: "#EDAAA0",
  error60: "#F0BBB3",
  error70: "#F4CCC6",
  error80: "#F8DDD9",
  error90: "#FBEEEC",
  error95: "#FDF6F6",
  error99: "#FFFDFD",

  // UI Color : Light theme
  primary: "#30373F",
  primaryInteract: "#6E7379",
  onPrimary: "#FFFFFF",
  primaryContainer: "#E8E8E8",
  primaryContainerInteract: "#F5F5F5",
  onPrimaryContainer: "#191919",

  secondary: "#03936E",
  secondaryInteract: "#4FB399",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#E6F4F1",
  secondaryContainerInteract: "#F2FAF8",
  onSecondaryContainer: "#191919",

  tertiary: "#367CE1",
  tertiaryInteract: "#72A3EA",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#EBF2FC",
  tertiaryContainerInteract: "#F5F8FD",
  onTertiaryContainer: "#191919",

  error: "#DA5542",
  errorInteract: "#E5887B",
  onError: "#FFFFFF",
  errorContainer: "#FBEEEC",
  errorContainerInteract: "#FDF6F6",
  onErrorContainer: "#191919",

  // Background
  background: "#FFFFFF",
  backgroundInteract: "#F3F3F3",
  onBackground: "#30373F",
  surface: "#F5F5F5",
  surfaceInteract: "#FDFDFD",
  onSurface: "#30373F",

  // Surface Variant
  surfaceVariant: "#979B9F",
  surfaceVariantInteract: "#F3F3F3",
  outline: "#E8E8E8",

  // Text only
  primary1: "#30373F",
  primary2: "#6E7379",
  primary3: "#979B9F",
  primary4: "#D6D7D9",

  secondary1: "#03936E",
  secondary2: "#4FB399",
  secondary3: "#81C9B7",
  secondary4: "#CDE9E2",

  // Custom color
  purple1: "#7843BD",

  // Transparent
  black10: "#000000E5",
  black20: "#000000CC",
  black30: "#00000099",
  black40: "#00000066",
  black50: "#00000033",
} as Record<TmColor, string>;

export const DARK_COLORS = {
  transparent: "transparent",
  // NOTE: 신규 Color
  // Black & White
  black: "#000000",
  white: "#FFFFFF",

  // Reference Color
  neutral00: "#191919",
  neutral10: "#303030",
  neutral20: "#474747",
  neutral30: "#5E5E5E",
  neutral40: "#757575",
  neutral50: "#8C8C8C",
  neutral60: "#A3A3A3",
  neutral70: "#BABABA",
  neutral80: "#D1D1D1",
  neutral90: "#E8E8E8",
  neutral95: "#F3F3F3",
  neutral99: "#FDFDFD",

  primary00: "#30373F",
  primary10: "#454B52",
  primary20: "#595F65",
  primary30: "#6E7379",
  primary40: "#83878C",
  primary50: "#979B9F",
  primary60: "#ACAFB2",
  primary70: "#C1C3C5",
  primary80: "#D6D7D9",
  primary90: "#EAEBEC",
  primary95: "#F5F5F5",
  primary99: "#FDFDFD",

  secondary00: "#03936E",
  secondary10: "#1C9E7C",
  secondary20: "#35A98B",
  secondary30: "#4FB399",
  secondary40: "#68BEA8",
  secondary50: "#81C9B7",
  secondary60: "#9AD4C5",
  secondary70: "#B3DFD3",
  secondary80: "#CDE9E2",
  secondary90: "#E6F4F1",
  secondary95: "#FCFEFE",
  secondary99: "#D6D7D9",

  tertiary00: "#367CE1",
  tertiary10: "#454B52",
  tertiary20: "#595F65",
  tertiary30: "#6E7378",
  tertiary40: "#979B9F",
  tertiary50: "#ACAFB2",
  tertiary60: "#C1C3C5",
  tertiary70: "#D6D7D9",
  tertiary80: "#D7E5F9",
  tertiary90: "#EBF2FC",
  tertiary95: "#F5F8FD",
  tertiary99: "#FDFEFF",

  error00: "#DA5542",
  error10: "#DE6655",
  error20: "#E17768",
  error30: "#E5887B",
  error40: "#E9998E",
  error50: "#EDAAA0",
  error60: "#F0BBB3",
  error70: "#F4CCC6",
  error80: "#F8DDD9",
  error90: "#FBEEEC",
  error95: "#FDF6F6",
  error99: "#FFFDFD",

  // UI Color : Light theme
  primary: "#30373F",
  primaryInteract: "#6E7379",
  onPrimary: "#FFFFFF",
  primaryContainer: "#E8E8E8",
  primaryContainerInteract: "#F5F5F5",
  onPrimaryContainer: "#191919",

  secondary: "#03936E",
  secondaryInteract: "#4FB399",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#E6F4F1",
  secondaryContainerInteract: "#F2FAF8",
  onSecondaryContainer: "#191919",

  tertiary: "#367CE1",
  tertiaryInteract: "#72A3EA",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#EBF2FC",
  tertiaryContainerInteract: "#F5F8FD",
  onTertiaryContainer: "#191919",

  error: "#DA5542",
  errorInteract: "#E5887B",
  onError: "#FFFFFF",
  errorContainer: "#FBEEEC",
  errorContainerInteract: "#FDF6F6",
  onErrorContainer: "#191919",

  // Background
  background: "#FFFFFF",
  backgroundInteract: "#F3F3F3",
  onBackground: "#30373F",
  surface: "#F5F5F5",
  surfaceInteract: "#FDFDFD",
  onSurface: "#30373F",

  // Surface Variant
  surfaceVariant: "#979B9F",
  surfaceVariantInteract: "#F3F3F3",
  outline: "#E8E8E8",

  // Text only
  primary1: "#30373F",
  primary2: "#6E7379",
  primary3: "#979B9F",
  primary4: "#D6D7D9",

  secondary1: "#03936E",
  secondary2: "#4FB399",
  secondary3: "#81C9B7",
  secondary4: "#CDE9E2",

  // Custom color
  purple1: "#7843BD",

  // Transparent
  black10: "#000000E5",
  black20: "#000000CC",
  black30: "#00000099",
  black40: "#00000066",
  black50: "#00000033",
} as Record<TmColor, string>;
