import React from 'react';
import { useUiContext } from 'styles';

const View = () => {
  const { theme, toggleThemeMode } = useUiContext();

  return (
    <div>
      Theme:
      {theme.palette.mode}
      <button onClick={toggleThemeMode}>toggle</button>
    </div>
  );
};

export default View;
