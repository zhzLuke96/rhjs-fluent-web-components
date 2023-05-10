import { rh } from '@rhjs/rh';
import { injectSlot } from '../misc';
import { FluentUIWrapper } from './FluentUIWrapper';

export type TabsOrientation = 'vertical' | 'horizontal';

export type TabsProps = {
  orientation?: TabsOrientation;

  tabs?: {
    title: string;
    view?: any;
    defaultActivated?: boolean;
  }[];
};

export const Tabs = FluentUIWrapper(
  (
    { tabs = [], ...props }: TabsProps & JSX.HTMLAttributes<HTMLDivElement>,
    ...children: any[]
  ) => {
    const container_dom = rh(`fluent-tabs`, { ...props }, ...children);
    tabs.forEach((tab) => {
      const { title, view, defaultActivated } = tab;
      const tabDom = rh('fluent-tab', {}, title);
      container_dom.appendChild(tabDom);
      if (defaultActivated) {
        setTimeout(() => {
          (container_dom as any)['activetab'] = tabDom;
        }, 3);
      }
      if (view) {
        const panelDom = rh('fluent-tab-panel', {}, view);
        container_dom.appendChild(panelDom);
      }
    });
    return () => container_dom;
  }
);
