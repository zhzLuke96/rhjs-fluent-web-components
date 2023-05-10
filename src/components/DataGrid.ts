import { cs, reactivity, rh } from '@rhjs/rh';
import { renameKeysToDashCase } from '../misc';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

// TODO data-grid-cell
// TODO data-grid-row

export type GenerateHeaderOptions = 'default' | 'none' | 'sticky';

export type DataGridProps = {
  rowsData?: Record<keyof any, any>[];

  noTabbing?: RefOrValue<boolean>;
  generateHeader?: GenerateHeaderOptions;
  gridTemplateColumns?: RefOrValue<string>;
};

export const DataGrid = FluentUIWrapper(
  (
    { rowsData, ...props }: DataGridProps & JSX.HTMLAttributes<HTMLDivElement>,
    ...children: any[]
  ) => {
    const dom = rh(
      `fluent-data-grid`,
      { ...renameKeysToDashCase(props) },
      ...children
    );
    cs.hookEffect(() => {
      (dom as any).rowsData = reactivity.unref(rowsData || []);
    });
    return () => dom;
  }
);
