import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type ComboboxAutocomplete = 'inline' | 'list' | 'both' | 'none';

export type ComboboxProps = {
  placeholder?: MaybeRef<string>;
  disabled?: MaybeRef<string>;
  autocomplete?: MaybeRef<ComboboxAutocomplete>;
  open?: MaybeRef<boolean>;
};

export const Combobox = FluentUIWrapper(
  (
    { ...props }: ComboboxProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-combobox`, { ...props }, ...children);
  }
);
