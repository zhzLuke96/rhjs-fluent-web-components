import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type TreeItemProps = {
  expanded?: RefOrValue<boolean>;
  selected?: RefOrValue<boolean>;
  disabled?: RefOrValue<boolean>;
  nested?: RefOrValue<boolean>;

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
    ...children: any[]
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
