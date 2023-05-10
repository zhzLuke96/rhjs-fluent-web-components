import { rh } from '@rhjs/rh';
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
    ...children: any[]
  ) => {
    if (expandMode) {
      (props as any)['expand-mode'] = expandMode;
    }
    return () => rh(`fluent-accordion`, { ...props }, ...children);
  }
);
