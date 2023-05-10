import { builtin, cs, rh } from '@rhjs/rh';
import { renameKeysToDashCase } from '../misc';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

export type TooltipPosition =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'start'
  | 'end'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end';

export type TooltipProps = {
  position?: RefOrValue<TooltipPosition>;
  delay?: RefOrValue<number>;
  autoUpdateMode?: RefOrValue<'auto' | 'anchor'>;
  horizontalViewportLock?: RefOrValue<boolean>;
  verticalViewportLock?: RefOrValue<boolean>;
  visible?: RefOrValue<boolean>;

  tooltipView?: any;
};

export const Tooltip = FluentUIWrapper(
  (
    {
      tooltipView,
      ...props
    }: TooltipProps & JSX.HTMLAttributes<HTMLDivElement>,
    ...children: any[]
  ) => {
    if (children.length === 0) {
      children.push(document.createElement('span'));
    }
    const ch0 = children[0];
    const tooltipDom = rh(
      `fluent-tooltip`,
      { ...renameKeysToDashCase(props) },
      tooltipView
    );

    setTimeout(() => {
      (tooltipDom as any).anchorElement = ch0;
      // (tooltipDom as any).addListeners();
    }, 3);
    cs.onUnmount(() => {
      (tooltipDom as any).removeListeners?.();
      (tooltipDom as any).disconnectedCallback?.();
    });
    return () => rh(builtin.Fragment, {}, tooltipDom, ...children);
  }
);
