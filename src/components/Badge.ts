import { rh } from '@rhjs/core';
import { FluentUIWrapper } from './FluentUIWrapper';

export type BadgeAppearance = 'accent' | 'lightweight' | 'neutral' | string;

export type BadgeProps = {
  appearance?: BadgeAppearance;
};

export const Badge = FluentUIWrapper(
  (
    { ...props }: BadgeProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-badge`, { ...props }, ...children);
  }
);
