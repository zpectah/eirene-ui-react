import { ThemeComponents } from './components';
import { ThemePalette } from './palette';
import { ThemeShape } from './shape';
import { ThemeTypography } from './typography';

export interface CreateThemeComponent {
  palette: ThemePalette;
  shape: ThemeShape;
  typography: ThemeTypography;
}

export interface Theme {
  palette: ThemePalette;
  components: ThemeComponents;
  shape: ThemeShape;
  typography: ThemeTypography;

  breakpoints?: {}; // TODO
  spacing?: {}; // TODO
  transitions?: {}; // TODO
  zIndex?: {}; // TODO
  shadows?: {}; // TODO
}
