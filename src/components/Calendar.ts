import { rh } from '@rhjs/core';
import { FluentUIWrapper } from './FluentUIWrapper';

// TODO

export type CalendarProps = {};

export const Calendar = FluentUIWrapper(
  (
    { ...props }: CalendarProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-calendar`, { ...props }, ...children);
  }
);
