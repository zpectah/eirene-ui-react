import React, { ReactNode } from 'react';
import { WithChildren } from 'types';
import { useUiContext } from 'styles';

export interface SectionProps extends WithChildren {
  title?: ReactNode;
}

const Section = ({ children, title }: SectionProps) => {
  const { theme } = useUiContext();

  return (
    <section style={{ padding: theme.spacing.get(2, 0) }}>
      {title && <div>{title}</div>}
      <div>{children}</div>
    </section>
  );
};

export default Section;
