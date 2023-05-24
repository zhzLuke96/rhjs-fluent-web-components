import { builtin, onUnmount, rh } from '@rhjs/rh';
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
    state,
    children: any[]
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

    let timer: any;
    const bindAnchor = () => {
      if (!ch0) {
        return;
      }
      if (!tooltipDom.isConnected) {
        timer = setTimeout(bindAnchor, 0);
        return;
      }
      (tooltipDom as any).anchorElement = ch0;
    };
    bindAnchor();
    onUnmount(() => clearTimeout(timer));

    onUnmount(() => {
      (tooltipDom as any).removeListeners?.();
      (tooltipDom as any).disconnectedCallback?.();
    });
    return () => rh(builtin.Fragment, {}, tooltipDom, ...children);
  }
);
