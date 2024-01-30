import { ButtonStyles, CreateThemeComponent } from 'types';
import {
  getTextButtonVariant,
  getOutlinedButtonVariant,
  getContainedButtonVariant,
  getElementTransitions,
} from '../utils';

export const createThemeComponentsButton = ({
  palette,
  shape,
  typography,
  transitions,
  components,
  spacing,
}: CreateThemeComponent): ButtonStyles => {
  const transition = getElementTransitions(
    ['background-color', 'color', 'border-color', 'box-shadow'],
    transitions.duration.shortest,
    transitions.easing.easeInOut
  );

  return {
    root: [
      {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textDecoration: 'none',
        verticalAlign: 'middle',
        userSelect: 'none',
        cursor: 'pointer',
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderWidth: shape.borderWidth.button,
        borderRadius: shape.borderRadius.medium,
        transition: transition,

        '&:hover, &:focus, &:active': {
          textDecoration: 'none',
        },
        '&:disabled, &[disabled], &.is--disabled': {
          pointerEvents: 'none',
          cursor: 'default',
        },

        '&.is--active': {
          // TODO
        },
        '&.is--loading': {
          position: 'relative',
          overflow: 'hidden',
          pointerEvents: 'none',
          cursor: 'default',
        },
        '&.is--fullWidth': {
          width: '100%',
        },

        ...typography.button,

        // Button sizes
        // '&.Button-sizeLarge': getSizeShape(
        //   '0.35rem', // TODO
        //   '0.75rem', // TODO
        //   '1rem', // TODO
        //   '1.125rem' // TODO
        // ),
        // '&.Button-sizeMedium': getSizeShape(
        //   '0.5rem', // TODO
        //   '0.75rem' // TODO
        //   // typography.button.fontSize, // TODO
        //   // typography.button.lineHeight // TODO
        // ),
        // '&.Button-sizeSmall': getSizeShape(
        //   '0.125rem', // TODO
        //   '0.25rem', // TODO
        //   '0.8rem', // TODO
        //   '0.9rem' // TODO
        // ),

        '&.Button-sizeSmall': {
          padding: spacing.get(1, 2),
          fontSize: '.85rem',
          lineHeight: 0.85,
        },
        '&.Button-sizeMedium': {
          padding: spacing.get(2, 3),
        },
        '&.Button-sizeLarge': {
          padding: spacing.get(3, 4),
          fontSize: '1.15rem',
          lineHeight: 1.25,
        },

        // '.Button-contained &': {
        //   /* TODO */
        // },
        // '.Button-outlined &': {
        //   /* TODO */
        // },
        // '.Button-text &': {
        //   /* TODO */
        // },

        // Button contained
        '&.Button-containedPrimary': getContainedButtonVariant(
          palette.primary.main,
          palette.primary.dark,
          palette.primary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity
        ),
        '&.Button-containedSecondary': getContainedButtonVariant(
          palette.secondary.main,
          palette.secondary.dark,
          palette.secondary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity
        ),
        '&.Button-containedTertiary': getContainedButtonVariant(
          palette.tertiary.main,
          palette.tertiary.dark,
          palette.tertiary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity
        ),
        '&.Button-containedError': getContainedButtonVariant(
          palette.error.main,
          palette.error.dark,
          palette.error.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity
        ),
        '&.Button-containedWarning': getContainedButtonVariant(
          palette.warning.main,
          palette.warning.dark,
          palette.warning.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity
        ),
        '&.Button-containedInfo': getContainedButtonVariant(
          palette.info.main,
          palette.info.dark,
          palette.info.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity
        ),
        '&.Button-containedSuccess': getContainedButtonVariant(
          palette.success.main,
          palette.success.dark,
          palette.success.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity
        ),
        '&.Button-containedInverted': getContainedButtonVariant(
          palette.inverted.main,
          palette.inverted.light,
          palette.inverted.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          true
        ),

        // Button outlined
        '&.Button-outlinedPrimary': getOutlinedButtonVariant(
          palette.primary.main,
          palette.primary.dark,
          palette.primary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-outlinedSecondary': getOutlinedButtonVariant(
          palette.secondary.main,
          palette.secondary.dark,
          palette.secondary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-outlinedTertiary': getOutlinedButtonVariant(
          palette.tertiary.main,
          palette.tertiary.dark,
          palette.tertiary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-outlinedError': getOutlinedButtonVariant(
          palette.error.main,
          palette.error.dark,
          palette.error.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-outlinedWarning': getOutlinedButtonVariant(
          palette.warning.main,
          palette.warning.dark,
          palette.warning.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-outlinedInfo': getOutlinedButtonVariant(
          palette.info.main,
          palette.info.dark,
          palette.info.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-outlinedSuccess': getOutlinedButtonVariant(
          palette.success.main,
          palette.success.dark,
          palette.success.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-outlinedInverted': getOutlinedButtonVariant(
          palette.inverted.main,
          palette.inverted.light,
          palette.inverted.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          true
        ),

        // Button text
        '&.Button-textPrimary': getTextButtonVariant(
          palette.primary.main,
          palette.primary.dark,
          palette.primary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-textSecondary': getTextButtonVariant(
          palette.secondary.main,
          palette.secondary.dark,
          palette.secondary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-textTertiary': getTextButtonVariant(
          palette.tertiary.main,
          palette.tertiary.dark,
          palette.tertiary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-textError': getTextButtonVariant(
          palette.error.main,
          palette.error.dark,
          palette.error.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-textWarning': getTextButtonVariant(
          palette.warning.main,
          palette.warning.dark,
          palette.warning.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-textInfo': getTextButtonVariant(
          palette.info.main,
          palette.info.dark,
          palette.info.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-textSuccess': getTextButtonVariant(
          palette.success.main,
          palette.success.dark,
          palette.success.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity
        ),
        '&.Button-textInverted': getTextButtonVariant(
          palette.inverted.main,
          palette.inverted.light,
          palette.inverted.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          true
        ),
      },
      components?.Button?.root,
    ],
    iconStart: [
      {
        /* TODO */
      },
      components?.Button?.iconStart,
    ],
    iconEnd: [
      {
        /* TODO */
      },
      components?.Button?.iconEnd,
    ],
    iconLoading: [
      {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: palette.action.loadingContrast,
        backgroundColor: palette.action.loading,
        borderRadius: shape.borderRadius.medium,
        backdropFilter: 'blur(.5rem)',
      },
      components?.Button?.iconLoading,
    ],
  };
};
