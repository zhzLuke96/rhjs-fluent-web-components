import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type SkeletonProps = {
  fill?: RefOrValue<string>;
  shape?: RefOrValue<'rect' | 'circle'>;
  pattern?: RefOrValue<string>;
  shimmer?: RefOrValue<boolean>;
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
