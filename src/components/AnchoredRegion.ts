import { builtin, onUnmount, rh } from '@rhjs/rh';
import { renameKeysToDashCase } from '../misc';
import { RefOrValue } from '../types';
import { FluentUIWrapper } from './FluentUIWrapper';

enum AxisPositioningMode {
  uncontrolled = 'uncontrolled',
  locktodefault = 'locktodefault',
  dynamic = 'dynamic',
}

enum AxisScalingMode {
  anchor = 'anchor',
  content = 'content',
  fill = 'fill',
}

enum HorizontalPosition {
  start = 'start',
  end = 'end',
  left = 'left',
  right = 'right',
  center = 'center',
  unset = 'unset',
}

enum VerticalPosition {
  top = 'top',
  bottom = 'bottom',
  center = 'center',
  unset = 'unset',
}

enum AutoUpdateMode {
  anchor = 'anchor',
  auto = 'auto',
}

enum AnchoredRegionPositionLabel {
  start = 'start',
  insetStart = 'insetStart',
  insetEnd = 'insetEnd',
  end = 'end',
  center = 'center',
}

export type AnchoredRegionProps = {
  regionView?: any;

  verticalPositioningMode?: RefOrValue<AxisPositioningMode>;
  verticalDefaultPosition?: RefOrValue<VerticalPosition>;
  verticalViewportLock?: RefOrValue<boolean>;
  verticalInset?: RefOrValue<boolean>;
  verticalThreshold?: RefOrValue<number>;
  verticalScaling?: RefOrValue<AxisScalingMode>;

  horizontalPositioningMode?: RefOrValue<AxisPositioningMode>;
  horizontalDefaultPosition?: RefOrValue<HorizontalPosition>;
  horizontalViewportLock?: RefOrValue<boolean>;
  horizontalInset?: RefOrValue<boolean>;
  horizontalThreshold?: RefOrValue<number>;
  horizontalScaling?: RefOrValue<AxisScalingMode>;

  fixedPlacement?: RefOrValue<boolean>;
  autoUpdateMode?: RefOrValue<boolean>;
};

export const AnchoredRegion = FluentUIWrapper(
  (
    {
      regionView,
      ...props
    }: AnchoredRegionProps & JSX.HTMLAttributes<HTMLDivElement>,
    state,
    children: any[]
  ) => {
    if (children.length === 0) {
      children.push(document.createElement('span'));
    }
    const ch0 = children[0];

    const region_view = rh(
      'fluent-anchored-region',
      { ...renameKeysToDashCase(props) },
      regionView
    );

    let timer: any;
    const bindAnchor = () => {
      if (!ch0) {
        return;
      }
      if (!region_view.isConnected) {
        timer = setTimeout(bindAnchor, 0);
        return;
      }
      (region_view as any).anchorElement = ch0;
    };
    bindAnchor();
    onUnmount(() => clearTimeout(timer));

    onUnmount(() => (region_view as any).disconnectedCallback());
    return () => rh(builtin.Fragment, {}, region_view, ...children);
  }
);
