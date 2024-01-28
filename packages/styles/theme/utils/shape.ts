export const getContainedShapeVariant = (
  background: string,
  hover: string,
  contrast: string,
  disabled: string,
  inverted?: boolean
) => {
  return {
    backgroundColor: background,
    color: contrast,
    borderColor: background,

    '&:hover:not(&.is--disabled)': {
      boxShadow: `inset 0 0 0 2.5rem ${hover}`,
      borderColor: hover,
    },

    '&:disabled, &[disabled], &.is--disabled': inverted
      ? {
          backgroundColor: background,
          color: contrast,
          borderColor: background,
        }
      : {
          backgroundColor: disabled,
          borderColor: 'transparent',
          textShadow: `0 1px .25rem ${disabled}`,
        },
  };
};

export const getOutlinedShapeVariant = (
  background: string,
  hover: string,
  contrast: string,
  disabled: string,
  inverted?: boolean
) => {
  return {
    backgroundColor: 'transparent',
    color: background,
    borderColor: background,

    '&:hover:not(&.is--disabled)': {
      boxShadow: `inset 0 0 0 2.5rem ${hover}`,
      color: contrast,
      borderColor: hover,
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
  hover: string,
  contrast: string,
  disabled: string,
  inverted?: boolean
) => {
  return {
    backgroundColor: 'transparent',
    color: background,
    borderColor: 'transparent',

    '&:hover:not(&.is--disabled)': {
      boxShadow: `inset 0 0 0 2.5rem ${hover}`,
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
