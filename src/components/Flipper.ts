import { rh } from '@rhjs/rh';
import { FluentUIWrapper } from './FluentUIWrapper';

export type FlipperProps = {};

export const Flipper = FluentUIWrapper(
  (
    { ...props }: FlipperProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-flipper`, { ...props }, ...children);
  }
);
