import { rh, ComponentDefine } from '@rhjs/rh';
import { fluentUIWebComponentsLoaded } from '../loader';

// wait for fluent ui loaded
export const FluentUIWrapper = <Component extends ComponentDefine>(
  component: Component
) => {
  return ((props: any, state: any, children: any[]) => {
    return () =>
      fluentUIWebComponentsLoaded.value
        ? rh(component, props, ...children)
        : null;
  }) as Component;
};
