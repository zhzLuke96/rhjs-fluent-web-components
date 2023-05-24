import { rh } from '@rhjs/rh';
import { renameKeysToDashCase } from '../misc';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type SliderLabelExpandMode = 'single' | 'multi';

export type SliderLabelProps = {
  position?: RefOrValue<string>;
  hideMark?: RefOrValue<boolean>;
  disabled?: RefOrValue<boolean>;

  orientation?: RefOrValue<'vertical' | 'horizontal'>;
};

export const SliderLabel = FluentUIWrapper(
  (
    { ...props }: SliderLabelProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () =>
      rh(
        `fluent-slider-label`,
        { ...renameKeysToDashCase(props) },
        ...children
      );
  }
);
