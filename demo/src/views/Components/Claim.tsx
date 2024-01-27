import React from 'react';
import { Link } from 'react-router-dom';

const Claim = () => {
  return (
    <div>
      strom s výpisem všech komponent ... takové rozšířené menu
      <div
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'row',
          gap: '.5rem',
        }}
      >
        <Link to="/components/button">Button</Link>
      </div>
    </div>
  );
};

export default Claim;
