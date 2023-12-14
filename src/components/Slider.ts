import { rh } from '@rhjs/core';
import { injectSlot } from '../misc';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type SliderExpandMode = 'single' | 'multi';

export type SliderProps = {
  readonly?: MaybeRef<boolean>;
  min?: MaybeRef<number>;
  max?: MaybeRef<number>;
  step?: MaybeRef<number>;

  orientation?: MaybeRef<'vertical' | 'horizontal'>;
  mode?: 'single-value'; // ...?

  slotTrack?: any;
  slotTrackStart?: any;
  slotThumb?: any;
};

export const Slider = FluentUIWrapper(
  (
    {
      slotThumb,
      slotTrack,
      slotTrackStart,
      ...props
    }: SliderProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    injectSlot(slotThumb, 'thumb', children);
    injectSlot(slotTrack, 'track', children);
    injectSlot(slotTrackStart, 'track-start', children);
    return () => rh(`fluent-Slider`, { ...props }, ...children);
  }
);
