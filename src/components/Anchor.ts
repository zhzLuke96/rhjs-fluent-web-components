import { rh } from '@rhjs/rh';
import { injectSlot, viewToSlot } from '../misc';
import { FluentUIWrapper } from './FluentUIWrapper';

export type AnchorProps = {
  slotStart?: any;
  slotEnd?: any;
};

export const Anchor = FluentUIWrapper(
  (
    {
      slotStart,
      slotEnd,
      ...props
    }: AnchorProps & JSX.HTMLAttributes<HTMLAnchorElement>,
    ...children: any[]
  ) => {
    injectSlot(slotStart, 'start', children);
    injectSlot(slotEnd, 'end', children);
    return () => rh(`fluent-anchor`, { ...props }, ...children);
  }
);
