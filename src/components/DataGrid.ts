import { unref, rh } from '@rhjs/core';
import { createEffect } from '@rhjs/hooks';
import { renameKeysToDashCase } from '../misc';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

// TODO data-grid-cell
// TODO data-grid-row

export type GenerateHeaderOptions = 'default' | 'none' | 'sticky';

export type DataGridProps = {
  rowsData?: Record<keyof any, any>[];

  noTabbing?: MaybeRef<boolean>;
  generateHeader?: GenerateHeaderOptions;
  gridTemplateColumns?: MaybeRef<string>;
};

export const DataGrid = FluentUIWrapper(
  (
    { rowsData, ...props }: DataGridProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    const dom = rh(
      `fluent-data-grid`,
      { ...renameKeysToDashCase(props) },
      ...children
    );
    createEffect(() => {
      (dom as any).rowsData = unref(rowsData || []);
    });
    return () => dom;
  }
);
