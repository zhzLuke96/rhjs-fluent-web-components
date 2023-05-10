import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type ProgressProps = {
  value?: RefOrValue<number | null>;
  max?: RefOrValue<number>;
  min?: RefOrValue<number>;
};

export const Progress = FluentUIWrapper(
  (
    { ...props }: ProgressProps & JSX.HTMLAttributes<HTMLDivElement>,
    ...children: any[]
  ) => {
    return () => rh(`fluent-progress`, { ...props }, ...children);
  }
);
