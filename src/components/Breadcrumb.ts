import { rh } from '@rhjs/rh';
import { FluentUIWrapper } from './FluentUIWrapper';

export type BreadcrumbProps = {};

export const Breadcrumb = FluentUIWrapper(
  (
    { ...props }: BreadcrumbProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-breadcrumb`, { ...props }, ...children);
  }
);
