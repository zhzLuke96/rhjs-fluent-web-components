import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type TextAreaProps = {
  placeholder?: MaybeRef<string>;
  readonly?: MaybeRef<boolean>;
  resize?: MaybeRef<boolean>;
  autofocus?: MaybeRef<boolean>;
  maxlength?: MaybeRef<number>;
  minlength?: MaybeRef<number>;
  name?: MaybeRef<string>;
  cols?: MaybeRef<number>;
  rows?: MaybeRef<number>;
  spellcheck?: MaybeRef<boolean>;
};

export const TextArea = FluentUIWrapper(
  (
    { ...props }: TextAreaProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-text-area`, { ...props }, ...children);
  }
);
