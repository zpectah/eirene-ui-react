import { ButtonStyles, CreateThemeComponent } from 'types';
import {
  getTextButtonVariant,
  getOutlinedButtonVariant,
  getContainedButtonVariant,
  getElementTransitions,
  getLoadingContainedPropsByVariant,
  getLoadingOutlinedPropsByVariant,
} from '../utils';
import Color from 'color';

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
        boxSizing: 'border-box',
        borderStyle: 'solid',
        borderColor: 'transparent',
        outline: 0,
        appearance: 'none',
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

        // Button sizes
        '&.Button-sizeSmall': {
          ...typography.shapeSmall,
          padding: spacing.get(2),
          gap: spacing.get(2),
        },
        '&.Button-sizeMedium': {
          ...typography.shapeMedium,
          padding: spacing.get(2, 3),
          gap: spacing.get(2),
        },
        '&.Button-sizeLarge': {
          ...typography.shapeLarge,
          padding: spacing.get(3, 4),
          gap: spacing.get(3),
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
          palette.ratio.focusOutlineOpacity,
          spacing.get(5)
        ),
        '&.Button-containedSecondary': getContainedButtonVariant(
          palette.secondary.main,
          palette.secondary.dark,
          palette.secondary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          spacing.get(5)
        ),
        '&.Button-containedTertiary': getContainedButtonVariant(
          palette.tertiary.main,
          palette.tertiary.dark,
          palette.tertiary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          spacing.get(5)
        ),
        '&.Button-containedError': getContainedButtonVariant(
          palette.error.main,
          palette.error.dark,
          palette.error.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          spacing.get(5)
        ),
        '&.Button-containedWarning': getContainedButtonVariant(
          palette.warning.main,
          palette.warning.dark,
          palette.warning.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          spacing.get(5)
        ),
        '&.Button-containedInfo': getContainedButtonVariant(
          palette.info.main,
          palette.info.dark,
          palette.info.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          spacing.get(5)
        ),
        '&.Button-containedSuccess': getContainedButtonVariant(
          palette.success.main,
          palette.success.dark,
          palette.success.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          spacing.get(5)
        ),
        '&.Button-containedInverted': getContainedButtonVariant(
          palette.inverted.main,
          palette.inverted.light,
          palette.inverted.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          spacing.get(5),
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
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-outlinedSecondary': getOutlinedButtonVariant(
          palette.secondary.main,
          palette.secondary.dark,
          palette.secondary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-outlinedTertiary': getOutlinedButtonVariant(
          palette.tertiary.main,
          palette.tertiary.dark,
          palette.tertiary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-outlinedError': getOutlinedButtonVariant(
          palette.error.main,
          palette.error.dark,
          palette.error.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-outlinedWarning': getOutlinedButtonVariant(
          palette.warning.main,
          palette.warning.dark,
          palette.warning.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-outlinedInfo': getOutlinedButtonVariant(
          palette.info.main,
          palette.info.dark,
          palette.info.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-outlinedSuccess': getOutlinedButtonVariant(
          palette.success.main,
          palette.success.dark,
          palette.success.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-outlinedInverted': getOutlinedButtonVariant(
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

        // Button text
        '&.Button-textPrimary': getTextButtonVariant(
          palette.primary.main,
          palette.primary.dark,
          palette.primary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-textSecondary': getTextButtonVariant(
          palette.secondary.main,
          palette.secondary.dark,
          palette.secondary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-textTertiary': getTextButtonVariant(
          palette.tertiary.main,
          palette.tertiary.dark,
          palette.tertiary.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-textError': getTextButtonVariant(
          palette.error.main,
          palette.error.dark,
          palette.error.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-textWarning': getTextButtonVariant(
          palette.warning.main,
          palette.warning.dark,
          palette.warning.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-textInfo': getTextButtonVariant(
          palette.info.main,
          palette.info.dark,
          palette.info.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-textSuccess': getTextButtonVariant(
          palette.success.main,
          palette.success.dark,
          palette.success.contrast,
          palette.action.disabled,
          shape.borderWidth.outline,
          palette.ratio.focusOutlineOpacity,
          palette.ratio.hoverShadowOpacity,
          spacing.get(5)
        ),
        '&.Button-textInverted': getTextButtonVariant(
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
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: shape.borderRadius.medium,

        '.Button-containedPrimary &': getLoadingContainedPropsByVariant(
          palette.primary.main,
          palette.primary.contrast,
          palette.ratio.loadingOpacity
        ),
        '.Button-containedSecondary &': getLoadingContainedPropsByVariant(
          palette.secondary.main,
          palette.secondary.contrast,
          palette.ratio.loadingOpacity
        ),
        '.Button-containedTertiary &': getLoadingContainedPropsByVariant(
          palette.tertiary.main,
          palette.tertiary.contrast,
          palette.ratio.loadingOpacity
        ),
        '.Button-containedError &': getLoadingContainedPropsByVariant(
          palette.error.main,
          palette.error.contrast,
          palette.ratio.loadingOpacity
        ),
        '.Button-containedWarning &': getLoadingContainedPropsByVariant(
          palette.warning.main,
          palette.warning.contrast,
          palette.ratio.loadingOpacity
        ),
        '.Button-containedInfo &': getLoadingContainedPropsByVariant(
          palette.info.main,
          palette.info.contrast,
          palette.ratio.loadingOpacity
        ),
        '.Button-containedSuccess &': getLoadingContainedPropsByVariant(
          palette.success.main,
          palette.success.contrast,
          palette.ratio.loadingOpacity
        ),
        '.Button-containedInverted &': getLoadingContainedPropsByVariant(
          palette.inverted.main,
          palette.inverted.contrast,
          palette.ratio.loadingOpacity
        ),

        '.Button-outlinedPrimary &': getLoadingOutlinedPropsByVariant(
          palette.primary.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-outlinedSecondary &': getLoadingOutlinedPropsByVariant(
          palette.secondary.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-outlinedTertiary &': getLoadingOutlinedPropsByVariant(
          palette.tertiary.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-outlinedError &': getLoadingOutlinedPropsByVariant(
          palette.error.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-outlinedWarning &': getLoadingOutlinedPropsByVariant(
          palette.warning.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-outlinedInfo &': getLoadingOutlinedPropsByVariant(
          palette.info.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-outlinedSuccess &': getLoadingOutlinedPropsByVariant(
          palette.success.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-outlinedInverted &': getLoadingOutlinedPropsByVariant(
          palette.inverted.main,
          palette.inverted.contrast,
          palette.ratio.loadingOpacity
        ),

        '.Button-textPrimary &': getLoadingOutlinedPropsByVariant(
          palette.primary.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-textSecondary &': getLoadingOutlinedPropsByVariant(
          palette.secondary.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-textTertiary &': getLoadingOutlinedPropsByVariant(
          palette.tertiary.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-textError &': getLoadingOutlinedPropsByVariant(
          palette.error.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-textWarning &': getLoadingOutlinedPropsByVariant(
          palette.warning.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-textInfo &': getLoadingOutlinedPropsByVariant(
          palette.info.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-textSuccess &': getLoadingOutlinedPropsByVariant(
          palette.success.main,
          palette.background.body,
          palette.ratio.loadingOpacity
        ),
        '.Button-textInverted &': getLoadingOutlinedPropsByVariant(
          palette.inverted.main,
          palette.inverted.contrast,
          palette.ratio.loadingOpacity
        ),
      },
      components?.Button?.iconLoading,
    ],
  };
};
