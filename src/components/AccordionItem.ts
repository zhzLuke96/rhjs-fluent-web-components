import { rh } from '@rhjs/rh';
import { injectSlot, viewToSlot } from '../misc';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type AccordionItemExpandMode = 'single' | 'multi';

export type AccordionItemProps = {
  headingLevel?: RefOrValue<1 | 2 | 3 | 4 | 5>;
  expanded?: RefOrValue<boolean>;
  disabled?: RefOrValue<boolean>;

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
    ...children: any[]
  ) => {
    if (headingLevel) {
      (props as any)['heading-level'] = headingLevel;
    }
    injectSlot(slotHeading, 'heading', children);
    return () => rh(`fluent-accordion-item`, { ...props }, ...children);
  }
);
