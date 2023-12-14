import { rh } from '@rhjs/core';
import { injectSlot } from '../misc';
import { FluentUIWrapper } from './FluentUIWrapper';

export type ButtonAppearance =
  | 'accent'
  | 'lightweight'
  | 'neutral'
  | 'outline'
  | 'stealth';

export type ButtonProps = {
  appearance?: ButtonAppearance;

  autofocus?: boolean;

  slotStart?: any;
  slotEnd?: any;
};

export const Button = FluentUIWrapper(
  (
    {
      slotStart,
      slotEnd,
      ...props
    }: ButtonProps & JSX.HTMLAttributes<HTMLButtonElement>,
    state,
    children: any[]
  ) => {
    injectSlot(slotStart, 'start', children);
    injectSlot(slotEnd, 'end', children);
    return () => rh(`fluent-button`, { ...props }, ...children);
  }
);
