import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type TextFieldType = 'email' | 'password' | 'tel' | 'text' | 'url';

export type TextFieldProps = {
  type?: RefOrValue<TextFieldType>;
  placeholder?: RefOrValue<string>;
  readonly?: RefOrValue<boolean>;
  resize?: RefOrValue<boolean>;
  autofocus?: RefOrValue<boolean>;
  maxlength?: RefOrValue<number>;
  minlength?: RefOrValue<number>;
  pattern?: RefOrValue<string>;
  size?: RefOrValue<number>;
  spellcheck?: RefOrValue<boolean>;
};

export const TextField = FluentUIWrapper(
  (
    { ...props }: TextFieldProps & JSX.HTMLAttributes<HTMLDivElement>,
    ...children: any[]
  ) => {
    return () => rh(`fluent-text-field`, { ...props }, ...children);
  }
);
