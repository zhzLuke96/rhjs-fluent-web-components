import { rh } from '@rhjs/rh';
import { FluentUIWrapper } from './FluentUIWrapper';

export type MenuProps = {};

export const Menu = FluentUIWrapper(
  (
    { ...props }: MenuProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-Menu`, { ...props }, ...children);
  }
);
