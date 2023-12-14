import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type RadioGroupProps = {
  orientation?: MaybeRef<'vertical' | 'horizontal'>;
};

export const RadioGroup = FluentUIWrapper(
  (
    { ...props }: RadioGroupProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-radio-group`, { ...props }, ...children);
  }
);
