import { untrack } from '@rhjs/core';

export const viewToSlot = (view: any, slotName: string) => {
  const untrack_view = untrack(view);
  let view_dom = untrack_view;
  if (!(untrack_view instanceof Element)) {
    view_dom = document.createElement('span');
    view_dom.innerText = String(view);
  }
  view_dom.setAttribute('slot', slotName);
  return view_dom;
};

// pluck id or random set one
export const ensureDomId = (dom: HTMLElement) => {
  if (!(dom instanceof HTMLElement)) {
    return '';
  }
  if (!dom.id) {
    dom.id = `id-${Math.random().toString(36).slice(2)}`;
  }
  return dom.id;
};

export function renameKeysToDashCase(obj: any) {
  const newObj = {} as any;
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const dashKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      newObj[dashKey] = obj[key];
    }
  }
  return newObj;
}

export function injectSlot(view: any, slotName: string, children: any[]) {
  if (!view) {
    return;
  }
  children.unshift(viewToSlot(view, slotName));
}
