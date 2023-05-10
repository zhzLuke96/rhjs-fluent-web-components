import { rh } from '@rhjs/rh';
import { injectSlot } from '../misc';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type SwitchProps = {
  slotCheckedMessage?: any;
  slotUnCheckedMessage?: any;

  readonly?: RefOrValue<boolean>;
};

export const Switch = FluentUIWrapper(
  (
    {
      slotCheckedMessage,
      slotUnCheckedMessage,
      ...props
    }: SwitchProps & JSX.HTMLAttributes<HTMLDivElement>,
    ...children: any[]
  ) => {
    injectSlot(slotCheckedMessage, 'checked-message', children);
    injectSlot(slotUnCheckedMessage, 'unchecked-message', children);
    return () => rh(`fluent-switch`, { ...props }, ...children);
  }
);
