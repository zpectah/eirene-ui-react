import { ButtonStyles, CreateThemeComponent } from 'types';
import {
  getSizeShape,
  getTextShapeVariant,
  getOutlinedShapeVariant,
  getContainedShapeVariant,
  getElementTransitions,
} from '../utils';

export const createThemeComponentsButton = ({
  palette,
  shape,
  typography,
  transitions,
  components,
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
        fontWeight: typography.button.fontWeight,
        textTransform: typography.button.textTransform,
        letterSpacing: typography.button.letterSpacing,
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

        // Button sizes
        '&.Button-sizeLarge': getSizeShape(
          '0.35rem', // TODO
          '0.75rem', // TODO
          '1rem', // TODO
          '1.125rem' // TODO
        ),
        '&.Button-sizeMedium': getSizeShape(
          '0.5rem', // TODO
          '0.75rem', // TODO
          typography.button.fontSize, // TODO
          typography.button.lineHeight // TODO
        ),
        '&.Button-sizeSmall': getSizeShape(
          '0.125rem', // TODO
          '0.25rem', // TODO
          '0.8rem', // TODO
          '0.9rem' // TODO
        ),

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
        '&.Button-containedPrimary': getContainedShapeVariant(
          palette.primary.main,
          palette.primary.dark,
          palette.primary.contrast,
          palette.action.disabled
        ),
        '&.Button-containedSecondary': getContainedShapeVariant(
          palette.secondary.main,
          palette.secondary.dark,
          palette.secondary.contrast,
          palette.action.disabled
        ),
        '&.Button-containedTertiary': getContainedShapeVariant(
          palette.tertiary.main,
          palette.tertiary.dark,
          palette.tertiary.contrast,
          palette.action.disabled
        ),
        '&.Button-containedError': getContainedShapeVariant(
          palette.error.main,
          palette.error.dark,
          palette.error.contrast,
          palette.action.disabled
        ),
        '&.Button-containedWarning': getContainedShapeVariant(
          palette.warning.main,
          palette.warning.dark,
          palette.warning.contrast,
          palette.action.disabled
        ),
        '&.Button-containedInfo': getContainedShapeVariant(
          palette.info.main,
          palette.info.dark,
          palette.info.contrast,
          palette.action.disabled
        ),
        '&.Button-containedSuccess': getContainedShapeVariant(
          palette.success.main,
          palette.success.dark,
          palette.success.contrast,
          palette.action.disabled
        ),
        '&.Button-containedInverted': getContainedShapeVariant(
          palette.inverted.main,
          palette.inverted.light,
          palette.inverted.contrast,
          palette.action.disabled,
          true
        ),

        // Button outlined
        '&.Button-outlinedPrimary': getOutlinedShapeVariant(
          palette.primary.main,
          palette.primary.dark,
          palette.primary.contrast,
          palette.action.disabled
        ),
        '&.Button-outlinedSecondary': getOutlinedShapeVariant(
          palette.secondary.main,
          palette.secondary.dark,
          palette.secondary.contrast,
          palette.action.disabled
        ),
        '&.Button-outlinedTertiary': getOutlinedShapeVariant(
          palette.tertiary.main,
          palette.tertiary.dark,
          palette.tertiary.contrast,
          palette.action.disabled
        ),
        '&.Button-outlinedError': getOutlinedShapeVariant(
          palette.error.main,
          palette.error.dark,
          palette.error.contrast,
          palette.action.disabled
        ),
        '&.Button-outlinedWarning': getOutlinedShapeVariant(
          palette.warning.main,
          palette.warning.dark,
          palette.warning.contrast,
          palette.action.disabled
        ),
        '&.Button-outlinedInfo': getOutlinedShapeVariant(
          palette.info.main,
          palette.info.dark,
          palette.info.contrast,
          palette.action.disabled
        ),
        '&.Button-outlinedSuccess': getOutlinedShapeVariant(
          palette.success.main,
          palette.success.dark,
          palette.success.contrast,
          palette.action.disabled
        ),
        '&.Button-outlinedInverted': getOutlinedShapeVariant(
          palette.inverted.main,
          palette.inverted.light,
          palette.inverted.contrast,
          palette.action.disabled,
          true
        ),

        // Button text
        '&.Button-textPrimary': getTextShapeVariant(
          palette.primary.main,
          palette.primary.dark,
          palette.primary.contrast,
          palette.action.disabled
        ),
        '&.Button-textSecondary': getTextShapeVariant(
          palette.secondary.main,
          palette.secondary.dark,
          palette.secondary.contrast,
          palette.action.disabled
        ),
        '&.Button-textTertiary': getTextShapeVariant(
          palette.tertiary.main,
          palette.tertiary.dark,
          palette.tertiary.contrast,
          palette.action.disabled
        ),
        '&.Button-textError': getTextShapeVariant(
          palette.error.main,
          palette.error.dark,
          palette.error.contrast,
          palette.action.disabled
        ),
        '&.Button-textWarning': getTextShapeVariant(
          palette.warning.main,
          palette.warning.dark,
          palette.warning.contrast,
          palette.action.disabled
        ),
        '&.Button-textInfo': getTextShapeVariant(
          palette.info.main,
          palette.info.dark,
          palette.info.contrast,
          palette.action.disabled
        ),
        '&.Button-textSuccess': getTextShapeVariant(
          palette.success.main,
          palette.success.dark,
          palette.success.contrast,
          palette.action.disabled
        ),
        '&.Button-textInverted': getTextShapeVariant(
          palette.inverted.main,
          palette.inverted.light,
          palette.inverted.contrast,
          palette.action.disabled,
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
