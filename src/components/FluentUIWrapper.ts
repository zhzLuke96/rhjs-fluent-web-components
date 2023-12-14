import { rh, Component } from '@rhjs/core';
import { fluentUIWebComponentsLoaded } from '../loader';

// wait for fluent ui loaded
export const FluentUIWrapper = <C extends Component>(component: C) => {
  return ((props: any, state: any, children: any[]) => {
    return () =>
      fluentUIWebComponentsLoaded.value
        ? rh(component, props, ...children)
        : null;
  }) as any as C;
};
