import {
  getSizeShape,
  getTextShapeVariant,
  getOutlinedShapeVariant,
  getContainedShapeVariant,
} from './shape';
import { ButtonStyles } from 'types';

export const getThemeComponentsButton = (): ButtonStyles => {
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
        borderColor: 'red',
        fontWeight: 500,

        // TODO
        borderRadius: '.25rem',

        // TODO
        transition: `background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,

        '&.is--loading': {
          position: 'relative',
          overflow: 'hidden',
        },

        // TODO #demo
        // TODO ...by @mui

        '&.is--fullWidth': {
          width: '100%',
        },

        '&.is--active': {},

        // Button sizes
        '&.Button-sizeLarge': getSizeShape(
          '0.35rem',
          '0.75rem',
          '1rem',
          '1.125rem'
        ),
        '&.Button-sizeMedium': getSizeShape(
          '0.25rem',
          '0.5rem',
          '1rem',
          '1.125rem'
        ),
        '&.Button-sizeSmall': getSizeShape(
          '0.125rem',
          '0.25rem',
          '0.8rem',
          '0.9rem'
        ),

        // Button contained
        '&.Button-containedPrimary': getContainedShapeVariant(
          'hsl(261, 58%, 47%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-containedSecondary': getContainedShapeVariant(
          'hsl(324, 2.6%, 37.5%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-containedTertiary': getContainedShapeVariant(
          'hsl(199, 18.3%, 33.1%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-containedError': getContainedShapeVariant(
          'hsl(0, 65.1%, 50.6%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-containedWarning': getContainedShapeVariant(
          'hsl(30, 100.0%, 48.0%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-containedInfo': getContainedShapeVariant(
          'hsl(210, 78.7%, 46.1%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-containedSuccess': getContainedShapeVariant(
          'hsl(123, 43.4%, 38.8%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-containedInverted': getContainedShapeVariant(
          'hsl(0, 0.0%, 94.1%)',
          'hsl(0, 0.0%, 9.8%)',
          'hsl(177, 0%, 64%)',
          true
        ),

        // Button outlined
        '&.Button-outlinedPrimary': getOutlinedShapeVariant(
          'hsl(261, 58%, 47%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-outlinedSecondary': getOutlinedShapeVariant(
          'hsl(324, 2.6%, 37.5%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-outlinedTertiary': getOutlinedShapeVariant(
          'hsl(199, 18.3%, 33.1%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-outlinedError': getOutlinedShapeVariant(
          'hsl(0, 65.1%, 50.6%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-outlinedWarning': getOutlinedShapeVariant(
          'hsl(30, 100.0%, 48.0%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-outlinedInfo': getOutlinedShapeVariant(
          'hsl(210, 78.7%, 46.1%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-outlinedSuccess': getOutlinedShapeVariant(
          'hsl(123, 43.4%, 38.8%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-outlinedInverted': getOutlinedShapeVariant(
          'hsl(0, 0.0%, 94.1%)',
          'hsl(0, 0.0%, 9.8%)',
          'hsl(177, 0%, 64%)',
          true
        ),

        // Button text
        '&.Button-textPrimary': getTextShapeVariant(
          'hsl(261, 58%, 47%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-textSecondary': getTextShapeVariant(
          'hsl(324, 2.6%, 37.5%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-textTertiary': getTextShapeVariant(
          'hsl(199, 18.3%, 33.1%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-textError': getTextShapeVariant(
          'hsl(0, 65.1%, 50.6%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-textWarning': getTextShapeVariant(
          'hsl(30, 100.0%, 48.0%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-textInfo': getTextShapeVariant(
          'hsl(210, 78.7%, 46.1%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-textSuccess': getTextShapeVariant(
          'hsl(123, 43.4%, 38.8%)',
          'hsl(0, 0.0%, 99.2%)',
          'hsl(177, 0%, 64%)'
        ),
        '&.Button-textInverted': getTextShapeVariant(
          'hsl(0, 0.0%, 94.1%)',
          'hsl(0, 0.0%, 9.8%)',
          'hsl(177, 0%, 64%)',
          true
        ),
      },
    ],
    iconStart: {},
    iconEnd: {},
    iconLoading: {
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
    },
  };
};
