import { rh } from '@rhjs/core';
import { renameKeysToDashCase } from '../misc';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type SliderLabelExpandMode = 'single' | 'multi';

export type SliderLabelProps = {
  position?: MaybeRef<string>;
  hideMark?: MaybeRef<boolean>;
  disabled?: MaybeRef<boolean>;

  orientation?: MaybeRef<'vertical' | 'horizontal'>;
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
