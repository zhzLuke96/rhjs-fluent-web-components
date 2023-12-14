import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type HorizontalScrollProps = {
  view?: MaybeRef<'default' | 'mobile'>;
  duration?: MaybeRef<string>;
  speed?: MaybeRef<number>;
  easing?: MaybeRef<string>;
};

export const HorizontalScroll = FluentUIWrapper(
  (
    { ...props }: HorizontalScrollProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-horizontal-scroll`, { ...props }, ...children);
  }
);
