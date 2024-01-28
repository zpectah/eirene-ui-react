import React from 'react';
import { useUiContext } from 'styles';

const Footer = () => {
  const { theme } = useUiContext();

  return (
    <footer
      style={{
        width: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '.5rem',
        color: theme.palette.text.disabled,
        ...theme.typography.caption,
      }}
    >
      &copy; 2024 EirineUI - All rights reserved
    </footer>
  );
};

export default Footer;
