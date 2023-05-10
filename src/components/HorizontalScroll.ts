import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type HorizontalScrollProps = {
  view?: RefOrValue<'default' | 'mobile'>;
  duration?: RefOrValue<string>;
  speed?: RefOrValue<number>;
  easing?: RefOrValue<string>;
};

export const HorizontalScroll = FluentUIWrapper(
  (
    { ...props }: HorizontalScrollProps & JSX.HTMLAttributes<HTMLDivElement>,
    ...children: any[]
  ) => {
    return () => rh(`fluent-horizontal-scroll`, { ...props }, ...children);
  }
);
