import { rh } from '@rhjs/rh';
import { FluentUIWrapper } from './FluentUIWrapper';

export type DividerProps = {};

export const Divider = FluentUIWrapper(
  (
    { ...props }: DividerProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-divider`, { ...props }, ...children);
  }
);
