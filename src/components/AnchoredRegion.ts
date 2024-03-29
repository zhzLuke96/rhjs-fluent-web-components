import { rh } from '@rhjs/core';
import { onUnmounted } from '@rhjs/hooks';
import { Fragment } from '@rhjs/builtin';
import { renameKeysToDashCase } from '../misc';
import { MaybeRef } from '../types';
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

  verticalPositioningMode?: MaybeRef<AxisPositioningMode>;
  verticalDefaultPosition?: MaybeRef<VerticalPosition>;
  verticalViewportLock?: MaybeRef<boolean>;
  verticalInset?: MaybeRef<boolean>;
  verticalThreshold?: MaybeRef<number>;
  verticalScaling?: MaybeRef<AxisScalingMode>;

  horizontalPositioningMode?: MaybeRef<AxisPositioningMode>;
  horizontalDefaultPosition?: MaybeRef<HorizontalPosition>;
  horizontalViewportLock?: MaybeRef<boolean>;
  horizontalInset?: MaybeRef<boolean>;
  horizontalThreshold?: MaybeRef<number>;
  horizontalScaling?: MaybeRef<AxisScalingMode>;

  fixedPlacement?: MaybeRef<boolean>;
  autoUpdateMode?: MaybeRef<boolean>;
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

    onUnmounted(() => clearTimeout(timer));
    onUnmounted(() => (region_view as any).disconnectedCallback());

    return () => rh(Fragment, {}, region_view, ...children);
  }
);
