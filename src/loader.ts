// <script type="module" src="https://unpkg.com/@fluentui/web-components"></script>

import { ref, untrack } from '@rhjs/rh';

export const fluentUIWebComponentsLoaded = ref(false);
const defaultFluentUIImportSrc = 'https://unpkg.com/@fluentui/web-components';
async function loadFluentUIWebComponents(src = defaultFluentUIImportSrc) {
  if (untrack(fluentUIWebComponentsLoaded)) {
    return true;
  }
  const script = document.createElement('script');
  script.type = 'module';
  script.src = src;
  return new Promise<boolean>((resolve, reject) => {
    script.onload = () => {
      resolve(true);
      fluentUIWebComponentsLoaded.value = true;
    };

    script.onerror = () => {
      reject(new Error('Failed to load Fluent UI Web Components.'));
    };

    document.body.appendChild(script);
  }).finally(() => {
    script.remove();
  });
}

let p: Promise<boolean>;
/**
 * load fluent ui
 *
 * @param src import fluent ui web components from url. Default import from `https://unpkg.com/@fluentui/web-components`
 * @returns
 */
export const ensureFluentUILoaded = (src = defaultFluentUIImportSrc) => {
  if (!p) {
    p = loadFluentUIWebComponents((src = defaultFluentUIImportSrc));
  }
  return p;
};
