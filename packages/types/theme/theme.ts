import { themeModeKeys } from '../enums';
import { ThemeComponents } from './components';

export type ThemeMode = keyof typeof themeModeKeys;

export interface Theme {
  components: ThemeComponents;
}
