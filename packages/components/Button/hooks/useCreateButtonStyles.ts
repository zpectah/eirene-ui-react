import { Theme, ButtonStylesProps } from 'types';
import {
  getContainedButtonVariant,
  getElementTransitions,
  getOutlinedButtonVariant,
  getTextButtonVariant,
} from 'styles';

export const useCreateButtonStyles = (
  theme: Theme,
  stylesProps: ButtonStylesProps
) => {
  const { transitions, palette, spacing, shape, typography } = theme;
  const { isLoading, isActive, isDisabled, fullWidth, size, variant, color } =
    stylesProps;

  const transition = getElementTransitions(
    ['background-color', 'color', 'border-color', 'box-shadow'],
    transitions.duration.shortest,
    transitions.easing.easeInOut
  );

  // root
  const rootBase = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    userSelect: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderColor: 'transparent',
    outline: 0,
    appearance: 'none',
    borderWidth: shape.borderWidth.button,
    borderRadius: shape.borderRadius.medium,
    transition: transition,
  };
  const rootIsActive = isActive
    ? {
        /* TODO */
      }
    : {};
  const rootIsDisabled = isDisabled
    ? {
        pointerEvents: 'none',
        cursor: 'default',
      }
    : {};
  const rootIsLoading = isLoading
    ? {
        position: 'relative',
        overflow: 'hidden',
        pointerEvents: 'none',
        cursor: 'default',
      }
    : {};
  const rootIsFullWidth = fullWidth
    ? {
        width: '100%',
      }
    : {};
  const rootSizeSmall = {
    ...typography.shapeSmall,
    padding: spacing.get(2),
    gap: spacing.get(2),
  };
  const rootSizeMedium = {
    ...typography.shapeMedium,
    padding: spacing.get(2, 3),
    gap: spacing.get(2),
  };
  const rootSizeLarge = {
    ...typography.shapeLarge,
    padding: spacing.get(3, 4),
    gap: spacing.get(3),
  };
  const rootVariantContained = {
    primary: getContainedButtonVariant(
      palette.primary.main,
      palette.primary.dark,
      palette.primary.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      spacing.get(5)
    ),
    secondary: getContainedButtonVariant(
      palette.secondary.main,
      palette.secondary.dark,
      palette.secondary.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      spacing.get(5)
    ),
    tertiary: getContainedButtonVariant(
      palette.tertiary.main,
      palette.tertiary.dark,
      palette.tertiary.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      spacing.get(5)
    ),
    error: getContainedButtonVariant(
      palette.error.main,
      palette.error.dark,
      palette.error.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      spacing.get(5)
    ),
    warning: getContainedButtonVariant(
      palette.warning.main,
      palette.warning.dark,
      palette.warning.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      spacing.get(5)
    ),
    info: getContainedButtonVariant(
      palette.info.main,
      palette.info.dark,
      palette.info.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      spacing.get(5)
    ),
    success: getContainedButtonVariant(
      palette.success.main,
      palette.success.dark,
      palette.success.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      spacing.get(5)
    ),
    inverted: getContainedButtonVariant(
      palette.inverted.main,
      palette.inverted.light,
      palette.inverted.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      spacing.get(5),
      true
    ),
  };
  const rootVariantOutlined = {
    primary: getOutlinedButtonVariant(
      palette.primary.main,
      palette.primary.dark,
      palette.primary.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    secondary: getOutlinedButtonVariant(
      palette.secondary.main,
      palette.secondary.dark,
      palette.secondary.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    tertiary: getOutlinedButtonVariant(
      palette.tertiary.main,
      palette.tertiary.dark,
      palette.tertiary.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    error: getOutlinedButtonVariant(
      palette.error.main,
      palette.error.dark,
      palette.error.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    warning: getOutlinedButtonVariant(
      palette.warning.main,
      palette.warning.dark,
      palette.warning.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    info: getOutlinedButtonVariant(
      palette.info.main,
      palette.info.dark,
      palette.info.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    success: getOutlinedButtonVariant(
      palette.success.main,
      palette.success.dark,
      palette.success.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    inverted: getOutlinedButtonVariant(
      palette.inverted.main,
      palette.inverted.light,
      palette.inverted.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5),
      true
    ),
  };
  const rootVariantText = {
    primary: getTextButtonVariant(
      palette.primary.main,
      palette.primary.dark,
      palette.primary.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    secondary: getTextButtonVariant(
      palette.secondary.main,
      palette.secondary.dark,
      palette.secondary.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    tertiary: getTextButtonVariant(
      palette.tertiary.main,
      palette.tertiary.dark,
      palette.tertiary.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    error: getTextButtonVariant(
      palette.error.main,
      palette.error.dark,
      palette.error.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    warning: getTextButtonVariant(
      palette.warning.main,
      palette.warning.dark,
      palette.warning.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    info: getTextButtonVariant(
      palette.info.main,
      palette.info.dark,
      palette.info.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    success: getTextButtonVariant(
      palette.success.main,
      palette.success.dark,
      palette.success.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5)
    ),
    inverted: getTextButtonVariant(
      palette.inverted.main,
      palette.inverted.light,
      palette.inverted.contrast,
      palette.action.disabled,
      shape.borderWidth.outline,
      palette.ratio.focusOutlineOpacity,
      palette.ratio.hoverShadowOpacity,
      spacing.get(5),
      true
    ),
  };
  const getRootSize = () => {
    switch (size) {
      case 'small':
        return rootSizeSmall;

      case 'medium':
        return rootSizeMedium;

      case 'large':
        return rootSizeLarge;
    }
  };
  const getRootVariant = () => {
    switch (variant) {
      case 'contained':
        return rootVariantContained[color];

      case 'outlined':
        return rootVariantOutlined[color];

      case 'text':
        return rootVariantText[color];
    }
  };

  // iconStart
  const iconStartBase = {};

  // iconEnd
  const iconEndBase = {};

  // iconLoading
  const iconLoadingBase = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: shape.borderRadius.medium,
    // TODO
  };

  // Final styles object
  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootIsDisabled,
      ...rootIsActive,
      ...rootIsLoading,
      ...rootIsFullWidth,
      ...getRootSize(),
      ...getRootVariant(),
    }),
    iconStart: Object.assign({
      ...iconStartBase,
    }),
    iconEnd: Object.assign({
      ...iconEndBase,
    }),
    iconLoading: Object.assign({
      ...iconLoadingBase,
    }),
  };

  return {
    styles,
  };
};
