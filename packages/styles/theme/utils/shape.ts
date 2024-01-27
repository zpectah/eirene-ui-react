export const getContainedShapeVariant = (
  background: string,
  contrast: string,
  disabled: string,
  inverted?: boolean
) => {
  return {
    backgroundColor: background,
    color: contrast,
    borderColor: background,

    '&:hover:not(&.is--disabled)': {
      boxShadow: `inset 0 0 0 2.5rem ${background}`,
      borderColor: background,
    },

    '&:disabled, &[disabled], &.is--disabled': inverted
      ? {
          backgroundColor: background,
          color: contrast,
          borderColor: background,
        }
      : {
          boxShadow: `inset 0 0 0 2.5rem ${disabled}`,
          borderColor: disabled,
        },
  };
};

export const getOutlinedShapeVariant = (
  background: string,
  contrast: string,
  disabled: string,
  inverted?: boolean
) => {
  return {
    backgroundColor: 'transparent',
    color: background,
    borderColor: background,

    '&:hover:not(&.is--disabled)': {
      boxShadow: `inset 0 0 0 2.5rem ${background}`,
      color: contrast,
      borderColor: background,
    },

    '&:disabled, &[disabled], &.is--disabled': inverted
      ? {
          color: background,
          borderColor: background,
        }
      : {
          color: disabled,
          borderColor: disabled,
        },
  };
};

export const getTextShapeVariant = (
  background: string,
  contrast: string,
  disabled: string,
  inverted?: boolean
) => {
  return {
    backgroundColor: 'transparent',
    color: background,
    borderColor: 'transparent',

    '&:hover:not(&.is--disabled)': {
      boxShadow: `inset 0 0 0 2.5rem ${background}`,
      color: contrast,
    },

    '&:disabled, &[disabled], &.is--disabled': inverted
      ? {
          color: background,
        }
      : {
          color: disabled,
        },
  };
};

export const getSizeShape = (
  spacingY: string,
  spacingX: string,
  fontSize: string,
  lineHeight: string | number
) => {
  return {
    padding: `${spacingY} ${spacingX}`,
    fontSize,
    lineHeight,
  };
};
