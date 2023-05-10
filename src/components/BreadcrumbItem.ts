import { rh } from '@rhjs/rh';
import { injectSlot } from '../misc';
import { FluentUIWrapper } from './FluentUIWrapper';

export type BreadcrumbItemExpandMode = 'single' | 'multi';

export type BreadcrumbItemProps = {
  slotStart?: any;
  slotEnd?: any;
  slotSeparator?: any;
};

export const BreadcrumbItem = FluentUIWrapper(
  (
    {
      slotEnd,
      slotStart,
      slotSeparator,
      ...props
    }: BreadcrumbItemProps & JSX.HTMLAttributes<HTMLAnchorElement>,
    ...children: any[]
  ) => {
    injectSlot(slotStart, 'start', children);
    injectSlot(slotEnd, 'end', children);
    injectSlot(slotSeparator, 'separator', children);
    return () => rh(`fluent-breadcrumb-item`, { ...props }, ...children);
  }
);
