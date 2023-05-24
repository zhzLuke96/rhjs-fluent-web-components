import { rh } from '@rhjs/rh';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type TextAreaProps = {
  placeholder?: RefOrValue<string>;
  readonly?: RefOrValue<boolean>;
  resize?: RefOrValue<boolean>;
  autofocus?: RefOrValue<boolean>;
  maxlength?: RefOrValue<number>;
  minlength?: RefOrValue<number>;
  name?: RefOrValue<string>;
  cols?: RefOrValue<number>;
  rows?: RefOrValue<number>;
  spellcheck?: RefOrValue<boolean>;
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
