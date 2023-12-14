import { rh } from '@rhjs/core';
import { injectSlot } from '../misc';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type ListOptionExpandMode = 'single' | 'multi';

export type ListOptionProps = {
  value?: string;
  selected?: MaybeRef<boolean>;
  disabled?: MaybeRef<boolean>;

  slotStart?: any;
  slotEnd?: any;
};

export const ListOption = FluentUIWrapper(
  (
    {
      slotEnd,
      slotStart,
      ...props
    }: ListOptionProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    injectSlot(slotStart, 'start', children);
    injectSlot(slotEnd, 'end', children);
    return () => rh(`fluent-option`, { ...props }, ...children);
  }
);
