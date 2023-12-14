import { rh } from '@rhjs/core';
import { injectSlot } from '../misc';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type SwitchProps = {
  slotCheckedMessage?: any;
  slotUnCheckedMessage?: any;

  readonly?: MaybeRef<boolean>;
};

export const Switch = FluentUIWrapper(
  (
    {
      slotCheckedMessage,
      slotUnCheckedMessage,
      ...props
    }: SwitchProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    injectSlot(slotCheckedMessage, 'checked-message', children);
    injectSlot(slotUnCheckedMessage, 'unchecked-message', children);
    return () => rh(`fluent-switch`, { ...props }, ...children);
  }
);
