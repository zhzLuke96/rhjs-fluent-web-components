import { reactivity } from '@rhjs/rh';

export type RefOrValue<T> = T extends reactivity.Ref<any>
  ? T
  : reactivity.Ref<T> | T;
