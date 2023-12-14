import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type RadioExpandMode = 'single' | 'multi';

export type RadioProps = {
  checked?: MaybeRef<boolean>;
  disabled?: MaybeRef<boolean>;
};

export const Radio = FluentUIWrapper(
  (
    { ...props }: RadioProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-radio`, { ...props }, ...children);
  }
);
