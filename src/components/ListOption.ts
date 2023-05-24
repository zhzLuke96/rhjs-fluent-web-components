import { rh } from '@rhjs/rh';
import { injectSlot } from '../misc';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type ListOptionExpandMode = 'single' | 'multi';

export type ListOptionProps = {
  value?: string;
  selected?: RefOrValue<boolean>;
  disabled?: RefOrValue<boolean>;

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
