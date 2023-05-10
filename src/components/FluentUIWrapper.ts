import { rh, SetupComponent, FunctionComponent } from '@rhjs/rh';
import { fluentUIWebComponentsLoaded } from '../loader';

// wait for fluent ui loaded
export const FluentUIWrapper = <
  Component extends SetupComponent | FunctionComponent
>(
  component: Component
) => {
  return ((props: any, ...children: any[]) => {
    return () =>
      fluentUIWebComponentsLoaded.value
        ? rh(component, props, ...children)
        : null;
  }) as Component;
};
