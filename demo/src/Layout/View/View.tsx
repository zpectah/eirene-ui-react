import React, { ReactNode } from 'react';
import { WithChildren } from 'types';

export interface ViewProps extends WithChildren {
  title: ReactNode;
}

const View = ({ children, title }: ViewProps) => {
  return (
    <div style={{ width: '100%' }}>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default View;
