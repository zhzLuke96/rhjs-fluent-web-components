import { rh } from '@rhjs/rh';
import { FluentUIWrapper } from './FluentUIWrapper';

export type ProgressRingProps = {};

export const ProgressRing = FluentUIWrapper(
  (
    { ...props }: ProgressRingProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-progress-ring`, { ...props }, ...children);
  }
);
