import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type ComboboxAutocomplete = 'inline' | 'list' | 'both' | 'none';

export type ComboboxProps = {
  placeholder?: RefOrValue<string>;
  disabled?: RefOrValue<string>;
  autocomplete?: RefOrValue<ComboboxAutocomplete>;
  open?: RefOrValue<boolean>;
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
