import { rh } from '@rhjs/core';
import { FluentUIWrapper } from './FluentUIWrapper';

export type AccordionExpandMode = 'single' | 'multi';

export type AccordionProps = {
  expandMode?: AccordionExpandMode;
};

export const Accordion = FluentUIWrapper(
  (
    {
      expandMode,
      ...props
    }: AccordionProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    if (expandMode) {
      (props as any)['expand-mode'] = expandMode;
    }
    return () => rh(`fluent-accordion`, { ...props }, ...children);
  }
);
