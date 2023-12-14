import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type CheckboxProps = {
  checked?: MaybeRef<boolean>;
  disabled?: MaybeRef<boolean>;
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
