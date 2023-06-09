import { isRef, rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type NumberFieldProps = {
  value?: RefOrValue<number>;
  bindValue?: boolean;
};

export const NumberField = FluentUIWrapper(
  (
    {
      bindValue,
      ...props
    }: NumberFieldProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    const dom = rh(`fluent-number-field`, { ...props }, ...children);
    if (bindValue) {
      dom.addEventListener('change', () => {
        if (isRef(props.value)) {
          props.value.value = Number((dom as HTMLInputElement).value);
        }
      });
    }
    return () => dom;
  }
);
