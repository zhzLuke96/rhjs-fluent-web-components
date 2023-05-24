import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type CheckboxProps = {
  checked?: RefOrValue<boolean>;
  disabled?: RefOrValue<boolean>;
};

export const Checkbox = FluentUIWrapper(
  (
    { ...props }: CheckboxProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-Checkbox`, { ...props }, ...children);
  }
);
