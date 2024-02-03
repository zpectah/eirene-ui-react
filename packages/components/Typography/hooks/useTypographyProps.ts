import clsx from 'clsx';
import { UseTypographyProps, UseTypographyPropsReturn } from 'types';
import { TYPOGRAPHY_ROOT } from 'core';

export const useTypographyProps = (props: UseTypographyProps): UseTypographyPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(TYPOGRAPHY_ROOT, className),
      style: { ...style },
    },
  };
};
