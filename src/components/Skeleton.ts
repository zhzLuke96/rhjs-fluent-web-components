import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type SkeletonProps = {
  fill?: MaybeRef<string>;
  shape?: MaybeRef<'rect' | 'circle'>;
  pattern?: MaybeRef<string>;
  shimmer?: MaybeRef<boolean>;
};

export const Skeleton = FluentUIWrapper(
  (
    { ...props }: SkeletonProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-skeleton`, { ...props }, ...children);
  }
);
