import { Theme, ButtonStylesProps } from 'types';
import {
  getElementTransitions,
  getContainedButtonLikeVariant,
  getOutlinedButtonLikeVariant,
  getTextButtonLikeVariant,
} from 'styles';

export const useCreateButtonStyles = (theme: Theme, stylesProps: ButtonStylesProps) => {
  const { transitions, palette, spacing, shape, typography } = theme;
  const { isLoading, isActive, isDisabled, fullWidth, size, variant, color } = stylesProps;

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

  const getRootSize = () => {
    switch (size) {
      case 'small':
        return {
          ...typography.shapeSmall,
          padding: spacing.get(2),
          gap: spacing.get(2),
        };

      case 'medium':
        return {
          ...typography.shapeMedium,
          padding: spacing.get(2, 3),
          gap: spacing.get(2),
        };

      case 'large':
        return {
          ...typography.shapeLarge,
          padding: spacing.get(3, 4),
          gap: spacing.get(3),
        };
    }
  };
  const getRootVariant = () => {
    switch (variant) {
      case 'contained':
        return getContainedButtonLikeVariant(palette, stylesProps);

      case 'outlined':
        return getOutlinedButtonLikeVariant(palette, stylesProps);

      case 'text':
        return getTextButtonLikeVariant(palette, stylesProps);
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
