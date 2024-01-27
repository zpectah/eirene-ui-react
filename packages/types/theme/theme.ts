import { ThemeComponents } from './components';
import { ThemePalette } from './palette';

export interface Theme {
  palette: ThemePalette;
  components: ThemeComponents;
}
