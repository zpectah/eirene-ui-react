// import color from 'color';
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
  ).join(', ');

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

        '&:hover, &:focus, &:active': {
          textDecoration: 'none',
        },

        '&:disabled, &[disabled], &.is--disabled': {
          pointerEvents: 'none',
          cursor: 'default',
        },

        // TODO
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',

        transition: transition,

        fontWeight: typography.button.fontWeight,
        textTransform: typography.button.textTransform,
        letterSpacing: typography.button.letterSpacing,

        borderRadius: shape.borderRadius.medium,

        // TODO
        '&.is--active': {},
        '&.is--loading': {
          position: 'relative',
          overflow: 'hidden',
        },
        '&.is--fullWidth': {
          width: '100%',
        },

        // Button sizes
        '&.Button-sizeLarge': getSizeShape(
          '0.35rem',
          '0.75rem',
          '1rem', // TODO
          '1.125rem' // TODO
        ),
        '&.Button-sizeMedium': getSizeShape(
          '0.5rem',
          '0.75rem',
          typography.button.fontSize,
          typography.button.lineHeight
        ),
        '&.Button-sizeSmall': getSizeShape(
          '0.125rem',
          '0.25rem',
          '0.8rem', // TODO
          '0.9rem' // TODO
        ),

        // Button contained
        '&.Button-containedPrimary': getContainedShapeVariant(
          palette.primary.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-containedSecondary': getContainedShapeVariant(
          palette.secondary.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-containedTertiary': getContainedShapeVariant(
          palette.tertiary.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-containedError': getContainedShapeVariant(
          palette.error.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-containedWarning': getContainedShapeVariant(
          palette.warning.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-containedInfo': getContainedShapeVariant(
          palette.info.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-containedSuccess': getContainedShapeVariant(
          palette.success.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-containedInverted': getContainedShapeVariant(
          'hsl(0, 0.0%, 94.1%)', // TODO
          'hsl(0, 0.0%, 9.8%)', // TODO
          palette.action.disabled,
          true
        ),

        // Button outlined
        '&.Button-outlinedPrimary': getOutlinedShapeVariant(
          palette.primary.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-outlinedSecondary': getOutlinedShapeVariant(
          palette.secondary.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-outlinedTertiary': getOutlinedShapeVariant(
          palette.tertiary.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-outlinedError': getOutlinedShapeVariant(
          palette.error.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-outlinedWarning': getOutlinedShapeVariant(
          palette.warning.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-outlinedInfo': getOutlinedShapeVariant(
          palette.info.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-outlinedSuccess': getOutlinedShapeVariant(
          palette.success.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-outlinedInverted': getOutlinedShapeVariant(
          'hsl(0, 0.0%, 94.1%)', // TODO
          'hsl(0, 0.0%, 9.8%)', // TODO
          palette.action.disabled, // TODO
          true
        ),

        // Button text
        '&.Button-textPrimary': getTextShapeVariant(
          palette.primary.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-textSecondary': getTextShapeVariant(
          palette.secondary.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-textTertiary': getTextShapeVariant(
          palette.tertiary.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-textError': getTextShapeVariant(
          palette.error.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-textWarning': getTextShapeVariant(
          palette.warning.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-textInfo': getTextShapeVariant(
          palette.info.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-textSuccess': getTextShapeVariant(
          palette.success.main,
          'hsl(0, 0.0%, 99.2%)',
          palette.action.disabled
        ),
        '&.Button-textInverted': getTextShapeVariant(
          'hsl(0, 0.0%, 94.1%)', // TODO
          'hsl(0, 0.0%, 9.8%)', // TODO
          palette.action.disabled, // TODO
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
        color: 'white',
        backgroundColor: 'rgba(25,25,25, .5)',

        '.Button-contained &': {},
        '.Button-outlined &': {},
        '.Button-text &': {},
      },
      components?.Button?.iconLoading,
    ],
  };
};
