import { rh } from '@rhjs/rh';
import { FluentUIWrapper } from './FluentUIWrapper';

export type ListBoxProps = {};

export const ListBox = FluentUIWrapper(
  (
    { ...props }: ListBoxProps & JSX.HTMLAttributes<HTMLDivElement>,
    ...children: any[]
  ) => {
    return () => rh(`fluent-listbox`, { ...props }, ...children);
  }
);
