import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type DesignSystemProviderKeys =
  | 'no-paint'
  | 'fill-color'
  | 'accent-base-color'
  | 'neutral-base-color'
  | 'design-unit'
  | 'direction'
  | 'base-height-multiplier'
  | 'base-horizontal-spacing-multiplier'
  | 'control-corner-radius'
  | 'layer-corner-radius'
  | 'stroke-width'
  | 'focus-stroke-width'
  | 'disabled-opacity'
  | 'type-ramp-minus-2-font-size'
  | 'type-ramp-minus-2-line-height'
  | 'type-ramp-minus-1-font-size'
  | 'type-ramp-minus-1-line-height'
  | 'type-ramp-base-font-size'
  | 'type-ramp-base-line-height'
  | 'type-ramp-plus-1-font-size'
  | 'type-ramp-plus-1-line-height'
  | 'type-ramp-plus-2-font-size'
  | 'type-ramp-plus-2-line-height'
  | 'type-ramp-plus-3-font-size'
  | 'type-ramp-plus-3-line-height'
  | 'type-ramp-plus-4-font-size'
  | 'type-ramp-plus-4-line-height'
  | 'type-ramp-plus-5-font-size'
  | 'type-ramp-plus-5-line-height'
  | 'type-ramp-plus-6-font-size'
  | 'type-ramp-plus-6-line-height'
  | 'accent-fill-rest-delta'
  | 'accent-fill-hover-delta'
  | 'accent-fill-active-delta'
  | 'accent-fill-focus-delta'
  | 'accent-foreground-rest-delta'
  | 'accent-foreground-hover-delta'
  | 'accent-foreground-active-delta'
  | 'accent-foreground-focus-delta'
  | 'neutral-fill-rest-delta'
  | 'neutral-fill-hover-delta'
  | 'neutral-fill-active-delta'
  | 'neutral-fill-focus-delta'
  | 'neutral-fill-input-rest-delta'
  | 'neutral-fill-input-hover-delta'
  | 'neutral-fill-input-active-delta'
  | 'neutral-fill-input-focus-delta'
  | 'neutral-fill-layer-rest-delta'
  | 'neutral-fill-stealth-rest-delta'
  | 'neutral-fill-stealth-hover-delta'
  | 'neutral-fill-stealth-active-delta'
  | 'neutral-fill-stealth-focus-delta'
  | 'neutral-fill-strong-hover-delta'
  | 'neutral-fill-strong-active-delta'
  | 'neutral-fill-strong-focus-delta'
  | 'base-layer-luminance'
  | 'neutral-stroke-divider-rest-delta'
  | 'neutral-stroke-rest-delta'
  | 'neutral-stroke-hover-delta'
  | 'neutral-stroke-active-delta'
  | 'neutral-stroke-focus-delta';

export type DesignSystemProviderProps = {
  [K in DesignSystemProviderKeys]?: RefOrValue<string | number>;
};

export const DesignSystemProvider = FluentUIWrapper(
  (
    {
      ...props
    }: DesignSystemProviderProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-design-system-provider`, { ...props }, ...children);
  }
);
