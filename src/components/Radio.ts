import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type RadioExpandMode = 'single' | 'multi';

export type RadioProps = {
  checked?: RefOrValue<boolean>;
  disabled?: RefOrValue<boolean>;
};

export const Radio = FluentUIWrapper(
  (
    { ...props }: RadioProps & JSX.HTMLAttributes<HTMLDivElement>,
    ...children: any[]
  ) => {
    return () => rh(`fluent-radio`, { ...props }, ...children);
  }
);
