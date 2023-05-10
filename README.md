# @rhjs/fluent-web-components

fluent ui web component bindings for @rhjs

# Usage

```tsx
import { rh, reactivity } from '@rhjs/rh';
import {
  DesignSystemProvider,
  ensureFluentUILoaded,
  Button,
} from '@rhjs/fluent-web-components';

const App = () => {
  const count = reactivity.ref(1);
  return () => (
    <Button appearance="accent" onClick={() => count.value++}>
      {count}
    </Button>
  );
};

ensureFluentUILoaded()
  .then(() => {
    rh.mount(document.querySelector('#app'), App);
  })
```

# License

MIT License.
