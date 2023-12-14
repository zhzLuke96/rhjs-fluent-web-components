import { rh } from '@rhjs/core';
import { FluentUIWrapper } from './FluentUIWrapper';

export type MenuItemRole = 'menuitem' | 'menuitemcheckbox' | 'menuitemradio';

export type MenuItemProps = {
  role?: MenuItemRole;
};

export const MenuItem = FluentUIWrapper(
  (
    { ...props }: MenuItemProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-menu-item`, { ...props }, ...children);
  }
);
