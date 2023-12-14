import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type SelectProps = {
  open?: MaybeRef<boolean>;
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
