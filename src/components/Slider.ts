import { rh } from '@rhjs/rh';
import { injectSlot } from '../misc';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type SliderExpandMode = 'single' | 'multi';

export type SliderProps = {
  readonly?: RefOrValue<boolean>;
  min?: RefOrValue<number>;
  max?: RefOrValue<number>;
  step?: RefOrValue<number>;

  orientation?: RefOrValue<'vertical' | 'horizontal'>;
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
