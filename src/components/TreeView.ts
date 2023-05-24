import { rh } from '@rhjs/rh';
import { FluentUIWrapper } from './FluentUIWrapper';

export type TreeViewProps = {};

export const TreeView = FluentUIWrapper(
  (
    { ...props }: TreeViewProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-tree-view`, { ...props }, ...children);
  }
);
