import jss, { Styles, StyleSheet, StyleSheetFactoryOptions } from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

export const useAttachStylesheet = (
  stylesheet: Partial<Styles<string | number, any, undefined>>,
  options?: StyleSheetFactoryOptions
): StyleSheet => jss.createStyleSheet(stylesheet, options);
