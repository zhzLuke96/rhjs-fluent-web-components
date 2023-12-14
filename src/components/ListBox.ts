import { rh } from '@rhjs/core';
import { FluentUIWrapper } from './FluentUIWrapper';

export type ListBoxProps = {};

export const ListBox = FluentUIWrapper(
  (
    { ...props }: ListBoxProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-listbox`, { ...props }, ...children);
  }
);
