import clsx from 'clsx';
import { UseContainerProps, UseContainerPropsReturn } from 'types';
import { CONTAINER_ROOT } from 'core';

export const useContainerProps = (props: UseContainerProps): UseContainerPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(CONTAINER_ROOT, className),
      style: { ...style },
    },
  };
};
