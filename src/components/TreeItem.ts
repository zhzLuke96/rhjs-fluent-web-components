import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type TreeItemProps = {
  expanded?: MaybeRef<boolean>;
  selected?: MaybeRef<boolean>;
  disabled?: MaybeRef<boolean>;
  nested?: MaybeRef<boolean>;

  onExpandedChange?: (event: CustomEvent) => any;
  onSelectedChange?: (event: CustomEvent) => any;
};

export const TreeItem = FluentUIWrapper(
  (
    {
      onExpandedChange,
      onSelectedChange,
      ...props
    }: TreeItemProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    const dom = rh(`fluent-tree-item`, { ...props }, ...children);
    if (onExpandedChange) {
      dom.addEventListener('expanded-change', onExpandedChange as any);
    }
    if (onSelectedChange) {
      dom.addEventListener('selected-change', onExpandedChange as any);
    }
    return () => dom;
  }
);
