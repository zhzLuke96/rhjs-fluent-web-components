import { rh } from '@rhjs/rh';
import { FluentUIWrapper } from './FluentUIWrapper';

export type CardProps = {
  width?: number | string;
  height?: number | string;
};

export const Card = FluentUIWrapper(
  (
    {
      width,
      height,
      ...props
    }: CardProps & Omit<JSX.HTMLAttributes<HTMLDivElement>, 'width' | 'height'>,
    state,
    children: any[]
  ) => {
    const cardStyle = (value: undefined | number | string, key: string) =>
      value
        ? `--card-${key}: ${value}${typeof value === 'number' ? 'px' : ''};`
        : '';
    props.style ||= '';
    props.style += cardStyle(width, 'width');
    props.style += cardStyle(height, 'height');
    return () => rh(`fluent-card`, { ...props }, ...children);
  }
);
