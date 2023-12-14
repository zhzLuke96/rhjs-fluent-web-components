import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type ProgressProps = {
  value?: MaybeRef<number | null>;
  max?: MaybeRef<number>;
  min?: MaybeRef<number>;
};

export const Progress = FluentUIWrapper(
  (
    { ...props }: ProgressProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-progress`, { ...props }, ...children);
  }
);
