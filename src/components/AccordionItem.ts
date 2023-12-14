import { rh } from '@rhjs/core';
import { injectSlot } from '../misc';
import { MaybeRef } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type AccordionItemExpandMode = 'single' | 'multi';

export type AccordionItemProps = {
  headingLevel?: MaybeRef<1 | 2 | 3 | 4 | 5>;
  expanded?: MaybeRef<boolean>;
  disabled?: MaybeRef<boolean>;

  // slot
  slotHeading?: any;
};

export const AccordionItem = FluentUIWrapper(
  (
    {
      headingLevel,
      //   expanded,
      //   disabled,
      slotHeading,
      ...props
    }: AccordionItemProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    if (headingLevel) {
      (props as any)['heading-level'] = headingLevel;
    }
    injectSlot(slotHeading, 'heading', children);
    return () => rh(`fluent-accordion-item`, { ...props }, ...children);
  }
);
