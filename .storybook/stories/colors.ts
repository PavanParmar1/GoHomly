// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
  overlay25: "rgba(25, 16, 21, 0.25)",

  primary: "#FF395A",
  white: "#FFFFFF",
  black: "#000000",
  textWhite: "#FFFFFF",
  textBlack: "#151515",
  unfillProgress: "#FDF1EB",
  fillProgress: "#F5CC50",
  tabIconNormal: "#CF7195",
  tabSelected: "#FFFFFF",
  tabBackground: "#A62858",
  primaryTransparent: " rgba(255, 57, 90, 0.4)",
  primaryTransparent25: "#A6285825",
  darkGray: "#6C7072",
  unpaid: "#E39806",
  paid: "#3BA141",
  recentVisit: "#929292",
  screenBackground: "#F3F2F7",
  divider: "#c2c2c2",
  payrollDot: "#f2f2f2",
  profileGray: "rgba(0, 0, 0, 0.3)",
  profilePic: "rgba(255, 223, 223, 1)",
  grayBar: "#3C3C434D",
  lightBlack: "#00000090",
  black50: "#00000050",
  loginbg: "#D5F4D7",
  sheetDivider: "#CDCFD0",
  white99: "#FFFFFF99",
  white35: "#FFFFFF35",
  unpaidTransparent: "#E3980699",
  textGray: "#909090",
  notInitiated: "#F54F4E",
  textColor: "#171717",
  shaddowColor: "rgba(0, 0, 0, 0.05)",
  shaddowColor1: "rgba(0, 0, 0, 0.15)",
  blackText: "#000000CC",
  placeholdercolor: "#00000066",
  greenTerms: "#3BA141",
  greenTermsUltraLight: "#49944E10",
  greenTermsLight: "#49944E80",
  black70: "#000000B2",
  steperBackground: "#E3EDED",
  steperNextButton: "#C8DCE4",
  subtext: "#00000080",
  grayUnfilled: "rgba(22, 22, 22, 0.05)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.primary,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,

  primary: palette.primary,
  white: palette.white,
  black: palette.black,
  textWhite: palette.textWhite,
  textBlack: palette.textBlack,
  fillProgress: palette.fillProgress,
  unfillProgress: palette.unfillProgress,
  tabIconNormal: palette.tabIconNormal,
  tabSelected: palette.tabSelected,
  tabBackground: palette.tabBackground,
  primaryTransparent: palette.primaryTransparent,
  darkGray: palette.darkGray,
  unpaid: palette.unpaid,
  paid: palette.paid,
  recentVisit: palette.recentVisit,
  screenBackground: palette.screenBackground,
  divider: palette.divider,
  payrollDot: palette.payrollDot,
  profileGray: palette.profileGray,
  profilePic: palette.profilePic,
  grayBar: palette.grayBar,
  lightBlack: palette.lightBlack,
  black50: palette.black50,
  loginbg: palette.loginbg,
  primaryTransparent25: palette.primaryTransparent25,
  sheetDivider: palette.sheetDivider,
  white99: palette.white99,
  white35: palette.white35,
  unpaidTransparent: palette.unpaidTransparent,
  textGray: palette.textGray,
  notInitiated: palette.notInitiated,
  textColor: palette.textColor,
  shaddowColor: palette.shaddowColor,
  shaddowColor1: palette.shaddowColor1,
  blackText: palette.blackText,
  placeholdercolor: palette.placeholdercolor,
  greenTerms: palette.greenTerms,
  greenTermsUltraLight: palette.greenTermsUltraLight,
  greenTermsLight: palette.greenTermsLight,
  black70: palette.black70,
  steperBackground: palette.steperBackground,
  steperNextButton: palette.steperNextButton,
  subtext: palette.subtext,
  grayUnfilled: palette.grayUnfilled,
}
