import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type SelectProps = {
  open?: RefOrValue<boolean>;
};

export const Select = FluentUIWrapper(
  (
    { ...props }: SelectProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-select`, { ...props }, ...children);
  }
);
