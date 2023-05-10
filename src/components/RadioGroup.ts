import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type RadioGroupProps = {
  orientation?: RefOrValue<'vertical' | 'horizontal'>;
};

export const RadioGroup = FluentUIWrapper(
  (
    { ...props }: RadioGroupProps & JSX.HTMLAttributes<HTMLDivElement>,
    ...children: any[]
  ) => {
    return () => rh(`fluent-radio-group`, { ...props }, ...children);
  }
);
