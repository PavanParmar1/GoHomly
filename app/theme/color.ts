import {palette} from './palette';

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.orange,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.orangeDarker,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,
  /**
   * The default color of text in many components.
   */
  text: palette.white,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.black,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,
};
export const colors = {
  background: '#ffffff',
  transparent: 'rgba(0,0,0,0)',
  primary: 'orange',
  primaryDarker: palette.orangeDarker,
  secondary: '#f96269',
  // secondary: '#FF646C',
  secondaryLight: '#FFF2F3',
  primaryDark: '',
  line: palette.offWhite,
  border: '#363636',
  textPrimary: '#121212',
  textSecondary: '#777777',
  // textSecondary: '#888',
  dim: palette.lightGrey,
  error: 'red',
  storybookDarkBg: palette.black,
  storybookTextColor: palette.black,

  buttonPrimary: 'rgba(255, 100, 108, 1)',
  buttonOutlineTiltle: 'rgba(119, 119, 119, 1)',
  buttonOutlineBorder: 'rgba(214, 214, 214, 1)',

  ratingPrimary: '#FFA91C',
  palette,
  text: palette.white,
  violet: 'violet',
  disabled: 'lightgray',
  white: 'white',
  gray: '#98A2B3',
  light: '#FFF9FA',
  darkgray: '#757575',
};
