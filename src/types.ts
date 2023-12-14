import { Ref } from '@rhjs/core';

export type MaybeRef<T> = T extends Ref<any> ? T : Ref<T> | T;
