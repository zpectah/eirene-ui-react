import React from 'react';

export interface SidebarNavigationItemProps {
  key: number;
  label: string;
  path: string;
}

export interface SidebarNavigationProps {
  items: SidebarNavigationItemProps[];
}

const SidebarNavigation = (props: SidebarNavigationProps) => {
  const { items = [] } = props;

  return (
    <div>
      {items.map(({ key, label, path }) => (
        <a key={key} href={path}>
          {label}
        </a>
      ))}
    </div>
  );
};

export default SidebarNavigation;
