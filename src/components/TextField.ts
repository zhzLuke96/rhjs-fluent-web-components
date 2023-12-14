import { rh } from '@rhjs/core';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type TextFieldType = 'email' | 'password' | 'tel' | 'text' | 'url';

export type TextFieldProps = {
  type?: MaybeRef<TextFieldType>;
  placeholder?: MaybeRef<string>;
  readonly?: MaybeRef<boolean>;
  resize?: MaybeRef<boolean>;
  autofocus?: MaybeRef<boolean>;
  maxlength?: MaybeRef<number>;
  minlength?: MaybeRef<number>;
  pattern?: MaybeRef<string>;
  size?: MaybeRef<number>;
  spellcheck?: MaybeRef<boolean>;
};

export const TextField = FluentUIWrapper(
  (
    { ...props }: TextFieldProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    return () => rh(`fluent-text-field`, { ...props }, ...children);
  }
);
